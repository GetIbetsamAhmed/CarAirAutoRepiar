import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-authentication-page',
  templateUrl: './profile-authentication-page.component.html',
  styleUrls: ['./profile-authentication-page.component.scss']
})
export class ProfileAuthenticationPageComponent {
  isShow = false;
  constructor(private router: Router) {
    const url = this.router.url;
    if (url === "/profile-authentication") {
      this.isShow = true;
    }
  }

}
