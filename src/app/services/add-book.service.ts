import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  constructor(private http: Http) { }

  addBook(book: Book) {
    let url = "http://localhost:8080/book/add";
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('X-AuthToken')
    });

    return this.http.post(url, JSON.stringify(book), { headers: headers });
  }
}
