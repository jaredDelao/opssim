import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  { path: '', component: PagesComponent, children: [
    { path: '', loadChildren: './pages/@components/not-logged.module#NotLoggedModule' },
    { path: 'user', loadChildren: './pages/@components-logged/logged.module#LoggedModule' },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
