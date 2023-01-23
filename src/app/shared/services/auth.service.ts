import { Injectable } from '@angular/core';
import { User } from '@shared/types/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  login(login: string, password: string): Observable<{token: string}> {
    return this.http.post<{token: string}>('auth/login', {
      login, password
    });
  }

  getUserInfo(): Observable<User> {
    const token = localStorage.getItem('userToken');
    return this.http.post<User>('auth/userinfo', {
      token
    })
  }
}
