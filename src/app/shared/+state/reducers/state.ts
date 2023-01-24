import * as fromAuth from './auth.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector, StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

const FEATURE_KEY = 'shared-auth';

export interface State {
  authFeature: fromAuth.State
}

export const reducers: ActionReducerMap<State> = {
  authFeature: fromAuth.reducer
}

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers)]
})
export class SharedAuthModule {}

export const selectSharedAuthState = createFeatureSelector<State>(FEATURE_KEY);

export const selectAuthState = createSelector(
  selectSharedAuthState,
  (state: State) => state.authFeature
);

export const selectToken = createSelector(
  selectAuthState,
  fromAuth.selectToken
)

export const selectUser = createSelector(
  selectAuthState,
  fromAuth.selectUser
)

export const selectError = createSelector(
  selectAuthState,
  fromAuth.selectError
)

