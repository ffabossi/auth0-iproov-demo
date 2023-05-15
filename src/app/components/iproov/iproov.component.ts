import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import '@iproov/web-sdk';

@Component({
  selector: 'app-iproov',
  templateUrl: './iproov.component.html',
  styleUrls: ['./iproov.component.scss'],
})
export class IproovComponent {

  token = '27ff8c1f2efe03b631a48b5990270365ebbfa36cb716b231f7e1c2b21801vu01';
  isAuth: boolean;
  constructor(private auth0Service: AuthService) { }

  ngOnInit() {
    this.auth0Service.isAuthenticated$.subscribe((isAuth) => {
      this.isAuth = isAuth;
      this.createIproovComponent(isAuth);
    });
  }

  createIproovComponent(isAuth: boolean) {

    const iProovMe = document.createElement('iproov-me');

    iProovMe.addEventListener('unsupported', () => {
      console.warn('unsupported event was fired!');
    });

    iProovMe.setAttribute('token', this.token);
    iProovMe.setAttribute('base_url', 'https://us.rp.secure.iproov.me/');

    const buttonLabel = isAuth ? 'Sign in to IProov' : 'MFA not available';
    const buttonIcon = isAuth ? `
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3" />
    ` :
      `
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M6 18L18 6M6 6l12 12" />
    `;

    const errorMessage = `
      <svg style="margin-right: .5rem;" aria-hidden="true" class="w-6 h-6 text-red-500 dark:text-red-600"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      Ops, algo de errado aconteceu
    `;

    const loaderProgress = `<div role="status">
    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
    </div>`

    iProovMe.innerHTML = `
      <div slot="ready"></div>
      <div slot="button">
        <button id="iproov-button" class="iproov-button" style="display: flex; align-items: center; background-color:#5045e5ff; border: none; padding: 0.75rem; border-radius: .5rem; cursor: ${isAuth ? 'pointer' : 'not-allowed'}; color: white; font-weight: 600; font-size:0.875rem">
          ${buttonLabel}
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            ${buttonIcon}
          </svg>
        </button>
      </div>
      <div slot="error" id="error-message">${errorMessage}</div>
      <div slot="progress">${loaderProgress}</div>
      <div slot="passed"
    `;

    const iproovContainer = document.getElementById('iproov-container');
    iproovContainer?.insertAdjacentElement('beforebegin', iProovMe);

    const iproovError: any = document.getElementById('error-message');
    iproovError.style.cssText += `
    border-radius: 1rem;
    color: #9ca3afff;
    display: flex;
    align-items: center;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    padding: 1.5rem
  `;

    const iproovButton: any = document.getElementById('iproov-button');

    if (!this.isAuth) {
      iproovButton.style.display = 'none';
    } else {
      iproovButton.style.display = 'visible';
    }

    iproovButton.addEventListener('mouseover', () => {
      iproovButton.style.transform = 'scale(1.05)';
      iproovButton.style.transition = 'all 0.4s';
    });

    iproovButton.addEventListener('mouseout', () => {
      iproovButton.style.transform = 'scale(1)';
      iproovButton.style.transition = 'all 0.4s';
    });
  }

}
