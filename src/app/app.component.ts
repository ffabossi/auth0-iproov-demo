import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import '@iproov/web-sdk';
import { IproovService } from './services/iproov.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth0-poc';
  constructor(
    private auth0Service: AuthService,
    private router: Router
  ) {
    this.auth0Service.isAuthenticated$.subscribe((isAuth) => {
      if (isAuth) {
        this.router.navigate(['/iproov-auth'])
      }
    });
  }
}
