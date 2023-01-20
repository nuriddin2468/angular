import { Injectable } from '@angular/core';
import { User } from '@shared/types/user';
import { BehaviorSubject, catchError, filter, map, Observable, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(login: string, password: string): Observable<{token: string | null}> {
    return this.http.post<{token: string}>('auth/login', {
      login, password
    }).pipe(
      tap(res => {
        localStorage.setItem('userToken', res.token);
        this._isAuthenticated.next(true);
      }),
      catchError(() => of({token: null}))
    );
  }

  logout(): void {
    localStorage.removeItem('userToken');
    this._isAuthenticated.next(false);
    this.router.navigate(['/auth']);
  }

  isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable().pipe(
      map(() => !!localStorage.getItem('userToken'))
    );
  }

  getUserInfo(): Observable<User> {
    const token =  localStorage.getItem('userToken');
    return this.isAuthenticated().pipe(
      filter(res => !!res),
      switchMap(() =>
        this.http.post<User>('auth/userinfo', {
          token
        })
      )
    )
  }
}
