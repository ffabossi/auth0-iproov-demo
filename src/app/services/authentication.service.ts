import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated$: any = null;

  constructor(private auth0Service: AuthService) { }


  verifyIfItsLoggedIn() {
    this.auth0Service.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.isAuthenticated$ = !this.isAuthenticated$;
      }
    })
  }
}
