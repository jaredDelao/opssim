import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountMenuComponent } from './account-menu/account-menu.component';


const routes: Routes = [
  { path: 'account', component: AccountMenuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
