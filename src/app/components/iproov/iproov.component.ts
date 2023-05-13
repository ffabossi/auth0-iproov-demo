import { Component, ElementRef } from '@angular/core';
import '@iproov/web-sdk';

@Component({
  selector: 'app-iproov',
  templateUrl: './iproov.component.html',
  styleUrls: ['./iproov.component.scss'],
})
export class IproovComponent {
  token = '877f08257f20e0efae533056080d91bb4e4d35602c350e1373166e611801vu01';


  ngOnInit() {
    window.addEventListener('WebComponentsReady', () => {
      const iProovMe = document.createElement('iproov-me');

      iProovMe.addEventListener('unsupported', () => {
        console.warn('unsupported event was fired!');
      });

      iProovMe.setAttribute('token', this.token);
      iProovMe.setAttribute('base_url', 'https://us.rp.secure.iproov.me/');

      iProovMe.innerHTML = `
      <div slot="button">
          <button style="display: flex;
          align-items: center; background-color:#5045e5ff; border: none; padding: 0.75rem; border-radius: .5rem; width: auto; cursor: pointer; color: white; font-weight: 600; font-size:0.875rem">
              Go to IProov
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
          </button>
      </div>`;

      document
        .getElementById('iproov-container')
        ?.insertAdjacentElement('beforebegin', iProovMe);

    });
  }
}
