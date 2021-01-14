import {createAction, props} from "@ngrx/store";
import {UserModel} from "../../../core/models/user.model";

export const userSignUpSuccess = createAction(
  '[SignIn API] User SignUp Success',
  props<{user: UserModel}>()
)
