import { User } from '@shared/types/user';
import { createReducer, on } from '@ngrx/store';
import { AuthActions, AuthApiActions } from '@shared/+state';

export interface State {
  user: User | null;
  token: string | null;
  error: boolean;
}

const initialState: State = {
  user: null,
  token: null,
  error: false
};


export const reducer = createReducer(
  initialState,
  on(AuthActions.logout, (state) => {
    return {
      ...state,
      user: null,
      token: null
    };
  }),
  on(AuthActions.setInitialTokenFromStorage, (state, action) => {
    return {
      ...state,
      token: action.token
    };
  }),
  on(AuthApiActions.loginSuccess, (state, action) => {
    return {
      ...state,
      token: action.token,
      error: false
    };
  }),
  on(AuthApiActions.loginFailure, (state) => {
    return {
      ...state,
      token: null,
      error: true
    };
  }),
  on(AuthApiActions.getUserInfoSuccess, (state, action) => {
    return {
      ...state,
      user: action.user
    };
  })
);

export const selectToken = (state: State) => state.token;
export const selectError = (state: State) => state.error;
export const selectUser = (state: State) => state.user;
