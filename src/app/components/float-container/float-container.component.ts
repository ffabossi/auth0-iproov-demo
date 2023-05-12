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
  isAuthenticated: boolean = false;

  svgPathData = 'M21.826 9.368 21 4c-6 0-9-3-9-3S9 4 3 4l-.826 5.368A11 11 0 0 0 7.779 20.7L12 23l4.221-2.3a11 11 0 0 0 5.605-11.332Zm-5.119.339-6 6a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L10 13.586l5.293-5.293a1 1 0 0 1 1.414 1.414Z'


  constructor(private auth0Service: AuthService) { }

  ngOnInit() {
    this.auth0Service.isAuthenticated$.subscribe((isAuthenticated) => {
      console.log(isAuthenticated)
      this.isAuthenticated = isAuthenticated;
      console.log(this.isAuthenticated)
    })
  }

  loginWithRedirect() {
    this.loginClicked.emit();
  }

  logout() {
    this.logoutClicked.emit();
  }

}
