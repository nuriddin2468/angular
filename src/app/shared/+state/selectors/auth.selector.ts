import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '@shared/+state/reducers/auth.reducer';
import { FEATURE_KEY, State } from '@shared/+state/modules/auth.module';

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
