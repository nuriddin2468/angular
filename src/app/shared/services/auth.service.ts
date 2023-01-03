import { Injectable } from '@angular/core';
import { User } from '@shared/types/user';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { UserMock } from '@app/testing/user.mock';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private router: Router
  ) { }

  login(email: string, password: string): Observable<boolean> {
    const user = UserMock;
    if (email !== user.email || password !== user.password)
      return of(false);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this._currentUser.next(user);
    return of(true);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this._currentUser.next(null);
    this.router.navigate(['/auth']);
  }

  isAuthenticated(): Observable<boolean> {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) this._currentUser.next(JSON.parse(currentUser));
    return this._currentUser.asObservable().pipe(
      map(res => !!res)
    );
  }

  getUserInfo(): Observable<User> {
    return this._currentUser.asObservable()
  }
}
