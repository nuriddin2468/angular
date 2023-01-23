import { User } from '@shared/types/user';
import { createReducer, on } from '@ngrx/store';
import { AuthActions, AuthApiActions } from '@shared/+state/actions';

export interface State {
  user: User | null;
  token: string | null;
  error: boolean;
}

const initialState: State = {
  user: null,
  token: localStorage.getItem('userToken'),
  error: false
};


export const reducer = createReducer(
  initialState,
  on(AuthActions.logout, (state) => {
    localStorage.removeItem('userToken');
    return {
      ...state,
      user: null,
      token: null
    };
  }),
  on(AuthApiActions.loginSuccess, (state, action) => {
    localStorage.setItem('userToken', action.token);
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
