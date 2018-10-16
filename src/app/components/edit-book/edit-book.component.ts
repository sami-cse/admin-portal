import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute, Router } from '@angular/router';
import { GetBookService } from '../../services/get-book.service';
import { EditBookService } from '../../services/edit-book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  private bookId: number;
  private book: Book = new Book();
  private bookUpdated: boolean;

  constructor(
    private editBookService: EditBookService,
    private getBookService: GetBookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  updateBook() {
    this.editBookService.updateBook(this.book).subscribe(
      response => {
        console.log(response);
        this.book = new Book();
        this.bookUpdated=true;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.bookId = Number.parseInt(params['id']);
    });

    this.getBookService.findOne(this.bookId).subscribe(
      response => {
        this.book = response.json();
      },
      error => console.log(error)
    )
  }

}
