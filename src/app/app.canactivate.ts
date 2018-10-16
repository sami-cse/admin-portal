import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) { }


  canActivate(): any {
    let authenticated = localStorage.length > 0 && localStorage.getItem("x-AuthToken") !== null && localStorage.getItem("x-AuthToken") !== undefined;
    if (!authenticated) {
      this.router.navigate(['login']);
    }
    return authenticated;
  }


}