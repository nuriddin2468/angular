import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthActions, AuthSelectors } from '@shared/+state';

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  form = this.fb.group({
    email: [],
    password: []
  });

  hasError = this.store.select(AuthSelectors.selectError);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) {
    this.store.select(AuthSelectors.selectToken)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.router.navigate(['/']));
  }

  submit(): void {
    const { email, password } = this.form.value;
    this.store.dispatch(AuthActions.signIn({ username: email, password }));
  }

}
