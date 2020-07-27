import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../models/auth-data.model';
import { CompanyService } from './company.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private accessLevel : string ;
  private token: string;
  private id : string ;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  private username: String;
  constructor(private http: HttpClient, private router: Router, private companyService: CompanyService) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
  getUsername() {
    return this.username;
  }
  getID() {
    return this.id;
  }
  getAccessLevel(){
    return this.accessLevel ;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  login(email: string, password: string) {
    const authData: AuthData = {
      email: email,
      password: password,
    };
    this.http
      .post<{ token: string, expiresIn: number, id: string, firstName:string}>(
        "http://localhost:3000/api/user/login",
        authData
      )
      .subscribe(
        (response) => {
          const token = response.token;
          this.token = token;
          if (token) {
            const expiresInDuration = response.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.id = response.id;
            this.username = response.firstName;
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000);
            this.saveAuthData(token, expirationDate,response.id, "response.accessLevel",response.firstName);
            this.router.navigate(["/products"]);
          }
        },
        (err) => {
          this.isAuthenticated = false;
        }
      );
  }

  autoAuthUser(){
    const authdata =this.getAuthData();
    if(!authdata){
      return ;
    }
    const now =  new Date();
    const expiresIn = authdata.expirationDate.getTime() - now.getTime() ;
    if (expiresIn > 0){
      this.token = authdata.token;
      this.isAuthenticated =true;
      this.username=authdata.firstName;
      this.id = authdata.id;
      //this.userAcclevel = authdata.accessLevel ;
      this.setAuthTimer(expiresIn/1000);
      this.authStatusListener.next(true);
    }
  }
    private setAuthTimer(duration: number){
      this.tokenTimer = setTimeout(() => {
        this.logout();
      }, duration * 1000);
    }
   

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/"]);
  }
  private saveAuthData(token: string, expirationDate: Date,id: string, accessLevel : string,firstName:string) {
    localStorage.setItem("token", token);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("accesslevel",accessLevel);
    localStorage.setItem("id",id);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("expiration");
    localStorage.removeItem("accesslevel");
    localStorage.removeItem("id");
  }

  private getAuthData(){
    const token = localStorage.getItem("token");
    const firstName = localStorage.getItem("firstName");
    const expirationDate = localStorage.getItem("expiration");
    const accessLevel = localStorage.getItem("accesslevel");
    const id = localStorage.getItem("id");
    if(!token && !expirationDate){
      return;
    }
    return {
      token : token,
      firstName :firstName,
        expirationDate : new Date(expirationDate),
        id : id,
        accessLevel : accessLevel
    }
  }
}