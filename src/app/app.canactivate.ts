import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private loginService: LoginService) {}

  
  canActivate():any {
    return localStorage.length>0 && localStorage.getItem("x-AuthToken")!==null && localStorage.getItem("x-AuthToken")!==undefined;
  }
};