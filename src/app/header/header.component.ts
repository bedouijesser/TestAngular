import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

declare const M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string = '';
  userImagePath: string = '';
  
  constructor(private authService: AuthService ) { }
  
  ngOnInit(): void {
    this.username = this.authService.user.username;
    this.userImagePath = this.authService.user.profileImg;
  
  // Materialize functions
    
    // sideNav init
    var matSidNav = document.querySelector('.sidenav');
    var sideNavInstence = new M.Sidenav(matSidNav,'draggable');

    // dropdown init
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems);
    });
    
    document.querySelectorAll(' ul.sidenav > li ').forEach(el => {
      
      el.addEventListener('click' , e => {
        if( window.innerWidth < 992 ){
          sideNavInstence.close();
        };
        document.querySelector('ul.sidenav > li.active').classList.remove('active');
        (<HTMLElement>e.target).parentElement.classList.add('active')
        
      })
    });
  }

}
