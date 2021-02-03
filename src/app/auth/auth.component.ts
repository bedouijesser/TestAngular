import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Global } from '../app.global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private global: Global,
    private router: Router
  ) { }
  hide = true;
  username = new FormControl('');
  password = new FormControl('');

  ngOnInit(): void {

  }

  connect(){
    this.authService.postLogin(this.username.value, this.password.value)
      .subscribe((res: any) => {
        if (res.data){
          this.global.token = res.data.token;
          const user = {
            username: this.username.value,
            token: res.data.token
          };

          this.authService.userData = user;
          localStorage.setItem('userData', JSON.stringify(user));
          this.authService.loggedIn = true;
          this.toastr.success('Connecté');
          this.router.navigate(['/dashboard']);
          this.global.loggedInSub.next(true);
        } else {
          this.toastr.error("Nom d'utilisateur ou mot de passe incorrecte .");
        }
      });
  }
}
