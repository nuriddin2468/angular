import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '@shared/+state/reducers';
import { AuthActions } from '@shared/+state/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user$ = this.store.select(selectUser);

  constructor(
    private store: Store,
    private router: Router
  ) {
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['/auth']);
  }

}
