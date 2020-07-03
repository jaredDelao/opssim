import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './pages/@components/product-detail/product-detail.component';
import { HomeComponent } from './pages/@components/home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product-detail', component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
