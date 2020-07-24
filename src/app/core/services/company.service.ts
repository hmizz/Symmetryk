import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
private companyName: string ;
  CompanyNameUpdated = new Subject<string>();
  constructor(private http: HttpClient, private router: Router) { }

  getUserCompany(companyId: number) {
    this.http
      .get<{name: string}>("http://192.168.1.19:3000/api/company/"+ companyId)
      .pipe(
        map((companyData) => {
          this.companyName = companyData.name;
          return companyData.name ;
        })
      )
      .subscribe((name) => {
        this.companyName = name;
        this.CompanyNameUpdated.next(this.companyName);
       
      });
  }

  getCompanyName(){
    return this.companyName ;
  }

  getCompanyNameUpadated() {
    return this.CompanyNameUpdated.asObservable();
  }

}

