import * as fromAuth from '@shared/+state/reducers/auth.reducer';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

export const FEATURE_KEY = 'shared-auth';

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
