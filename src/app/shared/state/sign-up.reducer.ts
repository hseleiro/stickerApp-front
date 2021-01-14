import {UserModel} from "../../../app/core/models/user.model"
import {SignUpPageActions} from "../../../app/pages/sign-up-page/actions"
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
    SignUpPageActions.enter,
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
