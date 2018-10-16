import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GetBookService {

  constructor(private http: Http) { }

  findOne(id: number) {
    let url = "http://localhost:8080/book/" + id;
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('X-AuthToken')
    });

    return this.http.get(url, { headers: headers });
  }
}
