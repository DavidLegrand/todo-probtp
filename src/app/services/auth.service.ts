import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuth: boolean;

  constructor(private router: Router) {
    this.isAuth = true;
  }

  login(): void {
    this.isAuth = true;
    this.router.navigate(['']);
  }

  logout(): void {
    this.isAuth = false;
    this.router.navigate(['login']);
  }

  get isAuth(): boolean {
    return this._isAuth;
  }
  set isAuth(value) {
    this._isAuth = value;
  }
}
