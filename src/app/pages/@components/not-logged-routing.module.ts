import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SignupComponent } from 'src/app/shared/@modals/signup/signup.component';
import { MenuOcasionComponent } from './menu-ocasion/menu-ocasion.component';
import { ProductsComponent } from './products/products.component';
import { TipsComponent } from './tips/tips.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registro', component: SignupComponent},
  {path: 'products/:idTipo/:idCategory', component: ProductsComponent},
  {path: 'product-detail/:idProduct', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'menu-ocasion', component: MenuOcasionComponent},
  {path: 'tips', component: TipsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotLoggedRoutingModule { }
