import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userName: string | undefined;
  userPicture: string;
  userEmail: string;

  constructor(private authService: AuthService) { }

  ngAfterViewInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.authService.user$.subscribe((data: any) => {
      console.log(data);
      this.userName = data?.nickname
      this.userPicture = data?.randomDog;
      this.userEmail = data.email
    })

  }

}
