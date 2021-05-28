import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuth: boolean;
  constructor() {
    this.isAuth = true;
  }
  login(): void {
    this.isAuth = true;
  }
  logout(): void {
    this.isAuth = false;
  }

  get isAuth(): boolean {
    return this._isAuth;
  }
  set isAuth(value) {
    this._isAuth = value;
  }
}
