import { Component, OnInit, Input } from '@angular/core';
import { Slide } from '../core/models/slide-model';
import { Subscription } from 'rxjs';
import { SlidesService } from '../core/services/slides.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  @Input() slides: [];
  constructor() { }

  ngOnInit(){
    }
}
