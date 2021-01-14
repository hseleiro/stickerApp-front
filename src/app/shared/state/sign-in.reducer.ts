import {UserModel} from "../../../app/core/models/user.model"
import {SignInPageActions} from "../../../app/pages/sign-in-page/actions"
import {Action, createReducer, on} from "@ngrx/store";

export interface State {
  collection: UserModel;
  email: string | null;
  password: string | null;
  userId: string | null;
}

export const initialState: State = {
  collection: null,
  email: null,
  password: null,
  userId: null
}

export const signInReducer = createReducer(
  initialState,
    on(
      SignInPageActions.enter,
      (state, action) => {
        return {
          ...state,
          email: null,
          password: null,
          userId: null
        }
      }
    )
)

export function reducer(state: undefined | State, action: Action) {
  return signInReducer(state, action)
}
