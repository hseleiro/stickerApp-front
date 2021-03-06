import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInPageComponent} from "./pages/sign-in-page/sign-in-page.component";
import {SignUpPageComponent} from "./pages/sign-up-page/sign-up-page.component";


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
