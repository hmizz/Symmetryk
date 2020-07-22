import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',redirectTo:'/login',pathMatch:'full'},
  { path: 'products', component: ProductsComponent },
  //{ path: 'presentation', component: PresentationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
