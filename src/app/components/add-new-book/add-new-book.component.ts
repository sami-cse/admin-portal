import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { AddBookService } from '../../services/add-book.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  private book: Book = new Book();
  private bookAdded: boolean;

  constructor(private addBookService: AddBookService) { }

  addBook() {
    this.addBookService.addBook(this.book).subscribe(
      response => {
        this.bookAdded = true;
        console.log(response);
        this.book = new Book();
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.bookAdded = false;
  }

}
