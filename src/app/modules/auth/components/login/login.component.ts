import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '@shared/services/auth.service';
import { Router } from '@angular/router';

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

  hasError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  submit(): void {
    const {email, password} = this.form.value;
    this.authService.login(email, password).subscribe(res => {
      if (!res.token) {
        this.hasError = true;
        this.cdr.markForCheck();
        return;
      }
      this.router.navigate(['/']);
    })
  }

}
