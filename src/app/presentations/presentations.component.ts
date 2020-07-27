import { Component, OnInit } from '@angular/core';
import { PresentationsService } from 'src/app/core/services/presentations.service';
import { presentation } from 'src/app/core/models/presentation-model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {
  presentations: presentation []= [];
  private presentationsSub: Subscription;
  productId : number ;
  name:string;
  type:string;
  created_at:string;
  updated_at:string;
  sub: any;
  constructor(public presentationsService: PresentationsService,private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.queryParams.subscribe(queryParams => {
      console.log(queryParams);
      this.productId = Number(queryParams['productId']);
      console.log(this.productId);
   })
    this.presentationsService.getpresentations(this.productId);

    this.presentationsSub = this.presentationsService.getpresentationUpdateListener()
      .subscribe((presentations: presentation[]) => {
        this.presentations = presentations;
      });
  
    }

}