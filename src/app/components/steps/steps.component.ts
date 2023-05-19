import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent {

  constructor(private authService: AuthService, private router: Router) { }

  async ngOnInit() {
    await this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.authService.getUser().subscribe((user: any) => {
          localStorage.setItem('userId', user?.sub);
          this.router.navigate(['/iproov-authentication'])
        })
      }
    })
  }

  login() {
    this.authService.loginWithRedirect();
  }

}
