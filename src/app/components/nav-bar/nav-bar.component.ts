import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn = false;

  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      response => {
        this.loggedIn = true;
      },
      error => {
        this.loggedIn = false;
      }
    );
  }

  toggleDisplay() {
    this.loggedIn = !this.loggedIn;
  }

  logout() {
    this.loginService.logOut().subscribe(
      response => {
        // location.reload();
        localStorage.clear();
        this.router.navigate(['login']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
