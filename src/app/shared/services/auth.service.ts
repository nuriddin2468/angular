import { Inject, Injectable } from '@angular/core';
import { User } from '@shared/types/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { ENDPOINT } from '@app/app.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: Storage,
    @Inject(ENDPOINT) private url: String
  ) {
  }

  login(login: string, password: string): Observable<{token: string}> {
    return this.http.post<{token: string}>(this.url + 'auth/login', {
      login, password
    });
  }

  getUserInfo(): Observable<User> {
    const token = this.storage?.getItem('userToken');
    return this.http.post<User>(this.url + 'auth/userinfo', {
      token
    })
  }
}
