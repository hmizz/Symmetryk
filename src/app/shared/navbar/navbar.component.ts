import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { CompanyService } from 'src/app/core/services/company.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  public companyName : string ;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  private companyListenerSubs: Subscription;
  userAccess: string;
  username: String;
  @Output() searchcriteria = new EventEmitter<String>();
  loading = false;
  constructor(public companyService: CompanyService,
    private authService: AuthService,
  ) {
    this.userAccess =this.authService.getAccessLevel();
  }


  onLogout() {
    this.loading = true;
    this.authService.logout();
  }
  ngOnInit() {

    
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.username = this.authService.getUsername();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.username = this.authService.getUsername();
        this.userIsAuthenticated = isAuthenticated;
        
      });
      this.companyListenerSubs = this.companyService.getCompanyNameUpadated().subscribe((name)=> {
        this.companyName = name ;
      });
  }
}