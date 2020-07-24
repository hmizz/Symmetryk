import { Component, OnInit } from '@angular/core';
import { slide } from '../core/models/slide-model';
import { Subscription } from 'rxjs';
import { SlidesService } from '../core/services/slides.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  slides: slide []= [];
  private slidesSub: Subscription;
  sub: any;
  constructor(public slidesService: SlidesService) { }

  ngOnInit(){
   
  
    
    this.slidesSub = this.slidesService.getslideUpdateListener()
      .subscribe((slides: slide[]) => {
        this.slides = slides;
      });
  
    }

}
