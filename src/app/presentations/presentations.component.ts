import { Component, OnInit, OnDestroy } from '@angular/core';
import { PresentationsService } from 'src/app/core/services/presentations.service';
import { presentation } from 'src/app/core/models/presentation-model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit, OnDestroy {
  public presentations: presentation []= [];
  private presentationsSub: Subscription;
  private productId : number ;
  private routeSub: Subscription;

  constructor(public presentationsService: PresentationsService,private route: ActivatedRoute) { }


  ngOnInit(): void{
    this.routeSub =this.route.params.subscribe(queryParams => {
      this.productId = Number(queryParams['productId']);
   })
    this.presentationsService.getpresentations(this.productId,2);

    this.presentationsSub = this.presentationsService.getpresentationUpdateListener()
      .subscribe((presentations: presentation[]) => {
        this.presentations = presentations;
      });
  
    }
    ngOnDestroy(): void {
      this.presentationsSub.unsubscribe();
      this.routeSub.unsubscribe();
    }


}