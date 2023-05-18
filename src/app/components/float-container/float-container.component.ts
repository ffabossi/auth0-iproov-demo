import { Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
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
  isAuthenticated: boolean;


  constructor(private auth0Service: AuthService, private router: Router) { }

  async ngOnInit() {
    await this.auth0Service.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
      if (this.isAuthenticated) {
        this.auth0Service.getUser().subscribe((user: any) => {
          localStorage.setItem('userId', user?.sub);
          this.router.navigate(['/iproov-authentication'])
        })
      }
    })
  }

  loginWithRedirect() {
    this.loginClicked.emit();
  }

}
