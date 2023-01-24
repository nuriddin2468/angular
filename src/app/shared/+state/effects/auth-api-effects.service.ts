import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AuthService } from '@shared/services/auth.service';
import { AuthActions, AuthApiActions } from '@shared/+state';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';

@Injectable()
export class AuthApiEffectsService {

  constructor(
    private actions$: Actions,
    private store: Store,
    private authService: AuthService
  ) {
  }

  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.signIn),
      switchMap(({ username, password }) => {
        return this.authService.login(username, password).pipe(
          map(({ token }) => AuthApiActions.loginSuccess({ token })),
          catchError(() => of(AuthApiActions.loginFailure()))
        );
      })
    );
  });

  getUserInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.getUserInfo),
      exhaustMap(() => {
        return this.authService.getUserInfo().pipe(
          map(user => AuthApiActions.getUserInfoSuccess({ user }))
        )
      })
    )
  })
}
