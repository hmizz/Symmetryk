import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { presentation } from "../models/presentation-model";
import { Router } from "@angular/router";
import { AuthService } from './auth.service';

@Injectable({ providedIn: "root" })
export class PresentationsService {
  private presentations: presentation[] = [];
  
  private presentationsUpdated = new Subject<presentation[]>();
  

  constructor(private http: HttpClient, private router: Router) {}

  getpresentations(id: Number,offset: Number) {
    this.http
      .get<{ message: string; presentations: any }>("http://localhost:3000/api/presentations/list/"+id +"/2/"+ 2)
      .pipe(
        map((presentationData) => {
          return presentationData.presentations.map((presentation) => {
            return {
              id: presentation.id,
              name: presentation.name,
              type:presentation.type,
              created_at:new Date(presentation.created_at).toLocaleString(),
              updated_at:new Date(presentation.updated_at).toLocaleString(),
              slides: presentation.slides
            };
          });
        })
      )
      .subscribe((transformedpresentations) => {
        this.presentations = transformedpresentations;
        this.presentationsUpdated.next([...this.presentations]);
        console.log(this.presentations);
      });
  }


  getpresentationUpdateListener() {
    return this.presentationsUpdated.asObservable();
  }


  getpresentationsArray(){
    return this.presentations ;
  }
  getpresentation(id: string){
    return this.http.get<{_id: number, name: string, user_id: string, thumb_path:string}>("http://192.168.1.19:3000/api/presentations/" + id);
  }

}