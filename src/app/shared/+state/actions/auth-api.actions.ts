import { createAction, props } from '@ngrx/store';
import { User } from '@shared/types/user';

export const loginSuccess = createAction(
  '[Auth API] login success',
  props<{ token: string }>()
)

export const loginFailure = createAction(
  '[Auth API] login failure'
)

export const getUserInfoSuccess = createAction(
  '[Auth API] get user info success',
  props<{ user: User }>()
);
