import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions, AuthSelectors } from '@shared/+state';
import { Router } from '@angular/router';
import { LOCAL_STORAGE } from '@ng-web-apis/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user$ = this.store.select(AuthSelectors.selectUser);

  constructor(
    private store: Store,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: Storage
  ) {
  }

  logout(): void {
    this.storage.removeItem('userToken');
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['/auth']);
  }

}
