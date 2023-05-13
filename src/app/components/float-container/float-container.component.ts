import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-float-container',
  templateUrl: './float-container.component.html',
  styleUrls: ['./float-container.component.scss']
})
export class FloatContainerComponent {

  @Input() titlemessage: string = '';
  @Input() subTitleMessage: string = '';
  @Input() svgImage: string = ''
  @Output() loginClicked = new EventEmitter<void>();
  @Output() logoutClicked = new EventEmitter<void>();
  isAuthenticated: any;

  svgPathData = 'M120.127 135.861l-16.85-51.864 44.107-32.045H92.863L76.011.09l-.005-.014h54.53l16.855 51.871v-.001l.014-.008c9.79 30.092-.292 64.318-27.278 83.923zm-88.234 0l-.014.01 44.119 32.053 44.129-32.062-44.115-32.054-44.119 32.053zM4.624 51.939c-10.304 31.721 1.657 65.333 27.26 83.928l.004-.016L48.74 83.99 4.642 51.951H59.15L76.003.089l.004-.014H21.474L4.624 51.939z'


  constructor(private auth0Service: AuthService) { }

  async ngOnInit() {
    await this.auth0Service.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
      if (this.isAuthenticated == true) {
        this.svgPathData = 'M17.5449 19.6455C25.5547 19.6455 29.7952 22.1263 31.6126 25.5905C31.6126 41.1458 31.6126 56.7011 31.6126 72.2564C28.5837 72.2564 19.1603 71.0495 17.5449 63.5177V19.6455Z" fill="#1C5298"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.59 0C28.4715 0 31.635 3.12894 31.635 7.01776C31.635 10.8842 28.4939 14.0355 24.59 14.0355C20.7085 14.0355 17.5449 10.9066 17.5449 7.01776C17.5449 3.12894 20.7085 0 24.59 0Z"'
        this.auth0Service.getUser().subscribe((user: any) => {
          localStorage.setItem('userId', user?.sub)
        })
      }
    })

  }

  loginWithRedirect() {
    this.loginClicked.emit();
  }

  logout() {
    this.logoutClicked.emit();
  }

}
