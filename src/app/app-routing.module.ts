import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProductsComponent } from './products/products.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { HomeGuard } from './core/guards/home.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ProductsComponent, canActivate: [HomeGuard]},
  { path: 'products', component: ProductsComponent },
  { path: ':productId/presentations', component: PresentationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[HomeGuard]
})
export class AppRoutingModule { }
