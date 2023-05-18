import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-iproov-auth',
  templateUrl: './iproov-auth.component.html',
  styleUrls: ['./iproov-auth.component.scss']
})
export class IproovAuthComponent {


  token = '027a7057c52845d47579041aae1c4335ceaab65e1a0f9e450dfda06a1801vu01';
  username: any;
  constructor(private auth0Service: AuthService, private router: Router) { }


  ngOnInit() {
    // this.auth0Service.getUser().subscribe((data) => { console.log(data) })
    this.auth0Service.user$.subscribe(user => this.username = user?.nickname)
    this.createIproovComponent();
  }


  createIproovComponent() {

    const iProovMe = document.createElement('iproov-me');

    iProovMe.addEventListener('unsupported', () => {
      console.warn('unsupported event was fired!');
    });

    iProovMe.setAttribute('token', this.token);
    iProovMe.setAttribute('base_url', 'https://us.rp.secure.iproov.me/');

    const buttonLabel = 'Sign in to IProov';
    const buttonIcon = `
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3" />
    `

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
      <button id="iproov-button" class="iproov-button" style="display: flex; align-items: center; 
      background-color:#5045e5ff; border: none; padding: 0.75rem; border-radius: .5rem; cursor: 'pointer'; color: white; font-weight: 600; font-size:0.875rem">
        ${buttonLabel}
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          ${buttonIcon}
        </svg>
      </button>
    </div>
    <div slot="error" id="error-message">${errorMessage}</div>
    <div slot="progress">${loaderProgress}</div>
    <div slot="passed" id="passed">
      <svg style="position: relative; right: 0.5rem" version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="24.000000pt" height="24.000000pt" viewBox="0 0 64.000000 64.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
          fill="#2469efff" stroke="none">
          <path d="M290 603 c-14 -10 -47 -20 -75 -23 -41 -4 -52 -9 -62 -31 -14 -29
            -33 -47 -67 -64 -16 -8 -22 -23 -26 -60 -3 -28 -14 -62 -24 -77 -18 -27 -18
            -29 0 -55 10 -16 21 -50 24 -78 4 -37 10 -52 26 -60 34 -17 53 -35 67 -64 10
            -22 21 -27 62 -31 28 -3 62 -14 78 -24 26 -18 28 -18 55 0 15 10 49 21 77 24
            37 4 52 10 60
            26 17 34 35 53 64 67 22 10 27 21 31 62 3 28 14 62 24 78 18 26
            18 28 0 55 -10 15 -21 49 -24 77 -4 41 -9 52 -31 62 -29 14 -47 33 -64 67 -8
            16 -22 22 -60 26 -28 3 -61 13 -75 23 -13 9 -27 17 -30 17 -3 0 -17 -8 -30
            -17z m170 -203 c10 -18 2 -30 -62 -96 -102 -106 -100 -106 -160 -47 -64 62
            -72 77 -52 97 22 22 29 20 72 -19 l38 -34 59 59 c63 64 87 73 105 40z"/>
        </g>
      </svg>
      You has been authenticated successfully
      </div>
      <div slot="failed" id="failed">
        <svg style="position: relative; right: 0.5rem; transform: scale(1.2)" version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
          preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
            fill="#f34236ff" stroke="none">
            <path d="M80 197 c-52 -27 -62 -104 -19 -143 30 -27 93 -25 121 4 30 29 31 94
              3 122 -26 26 -74 34 -105 17z m28 -49 c8 -8 15 -8 27 2 20 17 32 5 15 -15 -10
              -12 -10 -18 0 -30 17 -20 5 -32 -15 -15 -12 10 -18 10 -30 0 -20 -17 -32 -5
              -15 15 10 12 10 19 2 27 -14 14 -16 28 -4 28 4 0 13 -5 20 -12z"/>
          </g>
        </svg>
        User not authenticated, try again.
      </div>
      <div slot="grant_permission" id="grant-permission">
    
      </div>
      <div slot="grant_button" id="grant-permission-button">
        Device permissions must be granted to use iProov.
        <button id="iproov-grant-button-permission" class="iproov-button"
          style="border: none; padding: 0.75rem; border-radius: .5rem; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); cursor: pointer; color: white; font-weight: 600; font-size:0.875rem">
          <svg style="position: relative; right: 0.5rem; transform: scale(0.8);" version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
              fill="#fff" stroke="none">
              <path d="M82 208 c-7 -7 -12 -20 -12 -30 0 -10 -7 -21 -15 -24 -11 -5 -15 -22
                -15 -69 0 -69 6 -75 80 -75 74 0 80 6 80 75 0 71 -4 75 -75 75 -39 0 -43 2
                -38 21 7 26 30 35 54 21 26 -16 34 -15 19 3 -15 18 -61 20 -78 3z m103 - 123
                l0 -50 -65 0 -65 0 -3 39 c-5 63 0 67 70 64 l63 -3 0 -50z"/>
                    </g>
                  </svg>
                  Grant Permission
                </button>
              </div>
            </div>
          `;


    const iproovContainer = document.getElementById('iproov-container');
    iproovContainer?.insertAdjacentElement('beforebegin', iProovMe);

    const iproovGrantButtonPermission: any = document.getElementById('iproov-grant-button-permission');
    iproovGrantButtonPermission.style.cssText += `
    display: flex;
    align-items: center;
    background-color: #000000;
    border: none;
    padding: 0.3rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    color: white;
    font-weight: 600;
    font-size: 0.875rem;
    margin-top: 1rem;
  `;

    const iproovGrantPermissionButton: any = document.getElementById('grant-permission-button');
    iproovGrantPermissionButton.style.cssText += `
  color: #9ca3afff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 1.5rem;
  border-radius: 1rem;
`;

    const iproovError: any = document.getElementById('error-message');
    iproovError.style.cssText += `
    border-radius: 1rem;
    color: #9ca3afff;
    display: flex;
    align-items: center;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    padding: 1.5rem
  `;

    const iproovPassed: any = document.getElementById('passed');
    iproovPassed.style.cssText += `
    border-radius: 1rem;
    color: #9ca3afff;
    display: flex;
    align-items: center;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    padding: 1.5rem
  `;

    const iproovFailed: any = document.getElementById('failed');
    iproovFailed.style.cssText += `
    border-radius: 1rem;
    color: #9ca3afff;
    display: flex;
    align-items: center;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    padding: 1.5rem
  `;

    const iproovButton: any = document.getElementById('iproov-button');

    iproovButton.addEventListener('mouseover', () => {
      iproovButton.style.transform = 'scale(1.05)';
      iproovButton.style.transition = 'all 0.4s';
    });

    iproovButton.addEventListener('mouseout', () => {
      iproovButton.style.transform = 'scale(1)';
      iproovButton.style.transition = 'all 0.4s';
    });

  }
  logout() {
    this.auth0Service.logout();
  }

  iproovTryAgain() {
    this.router.navigate(['/iproov-authentication'])
  }
}
