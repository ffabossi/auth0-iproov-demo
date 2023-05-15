import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class IproovService {

  constructor(private httpClient: HttpClient, private auth0Service: AuthService) { }
  userId: any = '';

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
  }

  body = {
    "api_key": "24e048b8558cdc78c6f7bd6dadd278348459e3da",
    "secret": "a0a156c3d33e0f60b528b3227f9ed3644150229d",
    "resource": "onboarding",
    "assurance_type": "genuine_presence",
    "user_id": !!this.userId ? this.userId : ""
  };

  service() {
    return this.httpClient.post('http://localhost:3000', this.body);
  }

  enrolToken() {
    return this.httpClient.post('https://7351-2804-431-cff2-f2b3-60be-8531-2ee2-2f6a.ngrok-free.app/enrol-token', this.body);
  }
}
