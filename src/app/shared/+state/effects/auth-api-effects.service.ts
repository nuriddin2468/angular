import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AuthService } from '@shared/services/auth.service';
import { AuthActions, AuthApiActions } from '@shared/+state';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { Router } from '@angular/router';

@Injectable()
export class AuthApiEffectsService {

  constructor(
    private actions$: Actions,
    private store: Store,
    private authService: AuthService,
    @Inject(LOCAL_STORAGE) private storage: Storage,
    private router: Router
  ) {
  }

  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.signIn),
      switchMap(({ username, password }) => {
        return this.authService.login(username, password).pipe(
          tap(({ token }) => this.storage.setItem('userToken', token)),
          map(({ token }) => AuthApiActions.loginSuccess({ token })),
          tap(() => this.router.navigate(['/courses'])),
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
        );
      })
    );
  });
}
