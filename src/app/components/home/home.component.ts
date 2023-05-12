import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  ngOnInit() { }

  isAuthenticated$: any = false;
  constructor(private auth0Service: AuthService) {
    this.auth0Service.isAuthenticated$.subscribe((isAuth) => {
      this.isAuthenticated$ = isAuth;
      this.auth0Service.getUser().subscribe((user: any) => {
        localStorage.setItem('userId', user?.sub)
      })
    });
  }

  loginWithRedirect() {
    this.auth0Service.loginWithRedirect();
  }

  logout() {
    this.auth0Service.logout();
  }
}
