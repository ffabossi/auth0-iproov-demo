import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  titleMessage: string = ''
  subTitleMessage: string = ''

  constructor(private auth0Service: AuthService) { }

  ngOnInit() {
    console.log(this.auth0Service.user$)
  }


  loginWithRedirect() {
    this.auth0Service.loginWithRedirect();
  }

  async logout() {
    await this.auth0Service.logout({ returnTo: 'https://0602-2804-431-cff3-eccd-1552-84fc-538d-e0f1.ngrok-free.app/' });
    localStorage.removeItem('userId');
  }
}
