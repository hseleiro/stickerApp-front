import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromSignIn from "./sign-in.reducer";
import * as fromSignUp from "./sign-up.reducer";

export interface State {
  signIn: fromSignIn.State;
  signUp: fromSignUp.State;
}

export const reducers: ActionReducerMap<State> = {
  signIn: fromSignIn.reducer,
  signUp: fromSignUp.reducer
}

export const metaReducers: MetaReducer<State>[] = [];
