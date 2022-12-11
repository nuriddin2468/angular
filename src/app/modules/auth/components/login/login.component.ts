import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.fb.group({
    email: [],
    password: []
  });

  constructor(
    private fb: FormBuilder
  ) { }

  submit(): void {

  }

}
