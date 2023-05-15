import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import '@iproov/web-sdk';

@Component({
  selector: 'app-iproov',
  templateUrl: './iproov.component.html',
  styleUrls: ['./iproov.component.scss'],
})
export class IproovComponent {

  token = '67efa42e332bd8d8cabf06f6d983d2c630543ac133910647a20e23d21801vu01';
  isAuth: boolean;
  constructor(private auth0Service: AuthService) {

  }

  ngOnInit() {
    this.auth0Service.isAuthenticated$.subscribe((isAuth) => {
      this.isAuth = isAuth;
      this.createIproovCompoment(isAuth);
    });
  }

  createIproovCompoment(isAuth: boolean) {
    const iProovMe = document.createElement('iproov-me');

    iProovMe.addEventListener('unsupported', () => {
      console.warn('unsupported event was fired!');
    });

    iProovMe.setAttribute('token', this.token);
    iProovMe.setAttribute('base_url', 'https://us.rp.secure.iproov.me/');

    iProovMe.innerHTML = `
      <div slot="ready"></div>
      <div slot="button">
      <button style="display: flex; 
      align-items: center; background-color:#5045e5ff; border: none; padding: 0.75rem; border-radius: .5rem; 
      cursor: ${isAuth == true ? 'pointer' : 'not-allowed'}; color: white; font-weight: 600; font-size:0.875rem"}>
      ${isAuth == true ? 'Go to IProov' : 'MFA not available'}
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        ${isAuth == true ?
        `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3" />` :
        `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M6 18L18 6M6 6l12 12" />`
      }
        </svg>
        </button>
        </div>`;
    document
      .getElementById('iproov-container')
      ?.insertAdjacentElement('beforebegin', iProovMe);
  }
}
