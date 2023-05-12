import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  titleMessage: string = ''
  subTitleMessage: string = ''

  constructor(private auth0Service: AuthService, private authService: AuthenticationService) { }

  loginWithRedirect() {
    this.auth0Service.loginWithRedirect();
  }

  async logout() {
    await this.auth0Service.logout();
    localStorage.removeItem('userId');
  }
}
