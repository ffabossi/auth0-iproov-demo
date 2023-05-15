import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import '@iproov/web-sdk';
import { IproovService } from './services/iproov.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth0-poc';
  constructor(
    private iproovService: IproovService
  ) {
    // this.iproovService.enrolToken().subscribe(data => console.log(data));
  }

}
