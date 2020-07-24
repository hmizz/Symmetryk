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
  Presentations: presentation []= [];
  private presentationsSub: Subscription;
 
  name:string;
  type:string;
  created_at:string;
  updated_at:string;
  sub: any;
  constructor(public presentationsService: PresentationsService,private route: ActivatedRoute) { }

  ngOnInit(){
   this.route.params.subscribe(params => {this.presentationsService.getpresentations(params['product.id']);
    // this. = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);

  });
    
    this.presentationsSub = this.presentationsService.getpresentationUpdateListener()
      .subscribe((presentations: presentation[]) => {
        this.Presentations = presentations;
      });
  
    }

}