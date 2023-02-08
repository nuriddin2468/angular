import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthActions, AuthSelectors } from '@shared/+state';
import { LOCAL_STORAGE } from '@ng-web-apis/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(
    private store: Store,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: Storage
  ) {
    const token = this.storage.getItem('userToken') || '';
    this.store.dispatch(AuthActions.setInitialTokenFromStorage({token}));
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(AuthSelectors.selectToken).pipe(
      map(res => res ? true : this.router.createUrlTree(['/auth']))
    );
  }
}
