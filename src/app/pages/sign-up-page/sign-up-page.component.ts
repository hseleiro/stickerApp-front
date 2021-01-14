import { Component, OnInit } from '@angular/core';
import {State, Store} from "@ngrx/store";
import {SignUpPageActions} from "./actions";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  // @ts-ignore
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(SignUpPageActions.enter());
  }

}
