import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }
  sendCredential(userName: string, password: string) {
    let url = "http://localhost:8080/token";
    let encodedCredential = btoa(userName + ":" + password);
    let basicHeader = "Basic " + encodedCredential;
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': basicHeader
    });

    return this.http.get(url, { headers: headers });
  }

  checkSession() {
    let url = "http://localhost:8080/user/checkSession";

    let headers = new Headers({
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, { headers: headers });
  }

  logOut() {
    let url = "http://localhost:8080/user/logout";
    let headers = new Headers({
      'x-auth-token': localStorage.getItem('X-AuthToken')
    });

    return this.http.post(url, ' ', { headers: headers });
  }
}
