import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = { 'userName': '', 'password': '' }
  public loggedIn = false;
  constructor(private loginService: LoginService,public router: Router) { }

  logIn() {
    this.loginService.sendCredential(this.credential.userName, this.credential.password).subscribe(
      response => {
        console.log(response);
        localStorage.setItem("x-AuthToken", response.json());
        this.loggedIn = true;
        this.router.navigate(['viewBookList']);
      },
      error => {
        console.log(error);
       }
    );
  }

  ngOnInit() {
    if(localStorage.getItem("x-AuthToken")!==null){
      this.router.navigate(['viewBookList']);
    }
  }

}
