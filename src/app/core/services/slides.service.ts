import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Slide } from "../models/slide-model";
import { Router } from "@angular/router";
import { AuthService } from './auth.service';

@Injectable({ providedIn: "root" })
export class SlidesService {
  private slides: Slide[] = [];
  
  private slidesUpdated = new Subject<Slide[]>();
  

  constructor(private http: HttpClient, private router: Router) {}

  getslides(id: Number) {
    this.http
      .get<{ message: string; slides: any }>("http://192.168.1.19:3000/api/slides/"+id)
      .pipe(
        map((slideData) => {
          return slideData.slides.map((slide) => {
            return {
              id: slide.id,
              image: slide.name,
              html:slide.type,
              required:slide.required,
              emailable:slide.emailable,
            };
          });
        })
      )
      .subscribe((transformedslides) => {
        this.slides = transformedslides;
        this.slidesUpdated.next([...this.slides]);
        console.log(this.slides);
      });
  }


  getslideUpdateListener() {
    return this.slidesUpdated.asObservable();
  }


  getslidesArray(){
    return this.slides ;
  }
  getslide(id: string){
    return this.http.get<{_id: number, name: string, user_id: string, thumb_path:string}>("http://localhost:3000/api/slides/" + id);
  }

}