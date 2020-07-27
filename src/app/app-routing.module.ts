import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProductsComponent } from './products/products.component';
import { PresentationsComponent } from './presentations/presentations.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',redirectTo:'/login',pathMatch:'full'},
  { path: 'products', component: ProductsComponent },
  { path: 'presentations/:productId', component: PresentationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
