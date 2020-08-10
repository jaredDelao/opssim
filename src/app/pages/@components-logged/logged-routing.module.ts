import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { BillsComponent } from './bills/bills.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';


const routes: Routes = [
  { path: 'account', component: AccountMenuComponent },
  { path: 'bills', component: BillsComponent },
  { path: 'add-bill', component: AddBillComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'address', component: AddressComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
