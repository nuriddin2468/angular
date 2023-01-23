import { createAction, props } from '@ngrx/store';

export const signIn = createAction(
  '[Auth] Sign-in',
  props<{ username: string; password: string }>()
);

export const logout = createAction(
  '[Auth] logout'
);

export const getUserInfo = createAction(
  '[Auth] get user info'
);
