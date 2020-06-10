import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  username: string = '';
  schedualInfo: string = '';
  
  constructor(private authSrevice: AuthService) { }

  ngOnInit(): void {
    this.username = this.authSrevice.user.username;
    this.schedualInfo = this.authSrevice.user.groupe;
  }

}
