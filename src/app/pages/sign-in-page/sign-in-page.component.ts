import { Component, OnInit } from '@angular/core';
import {State, Store} from "@ngrx/store";
import {SignInPageActions} from "./actions";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  // @ts-ignore
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(SignInPageActions.enter());
  }

}
