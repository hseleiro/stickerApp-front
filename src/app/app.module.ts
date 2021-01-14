import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import {EffectsModule} from "@ngrx/effects";
import {metaReducers, reducers} from "./shared/state";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument(),
/*    EffectsModule.forRoot([
      SignInApiEffects,
    ]),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
