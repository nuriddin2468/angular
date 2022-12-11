import { Injectable } from '@angular/core';
import { User } from '@shared/types/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor() { }

  login(): void {
    console.log('login');
  }

  logout(): void {
    console.log('logout');
  }

  isAuthenticated(): void {
    console.log('isAuthenticated');
  }

  getUserInfo(): void {
    console.log('getUserInfo');
  }
}
