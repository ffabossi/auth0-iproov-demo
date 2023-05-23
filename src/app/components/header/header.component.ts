import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuth: boolean;

  userName: string | undefined;

  constructor(private authService: AuthService) { }


  ngOnInit() {
    this.authService.isAuthenticated$.subscribe((isAuth) => {
      this.isAuth = isAuth
    })

    this.authService.user$.subscribe((user) => {
      this.userName = user?.nickname;
    })
  }

  login() {
    this.authService.loginWithRedirect();
  }

  logout() {
    this.authService.logout({ returnTo: 'https://0602-2804-431-cff3-eccd-1552-84fc-538d-e0f1.ngrok-free.app' })
  }

}
