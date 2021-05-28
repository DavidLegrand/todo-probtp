import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public AuthService: AuthService) {}

  ngOnInit(): void {}
  isAuth(): boolean {
    return this.AuthService.isAuth;
  }
  login() {
    this.AuthService.login();
  }
}