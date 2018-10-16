import { Component, OnInit } from '@angular/core';

import { Book } from '../../models/book';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { GetBookListService } from '../../services/get-book-list.service';
import { MatDialog,MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public bookList: Book[];
  private selectedBook: Book;
  private checked: boolean;
  private allChecked: boolean;
  private removeBookList: Book[] = new Array();

  constructor(
    public getBookListService: GetBookListService,
    public router: Router,
    public dialog:MatDialog
  ) { }

  ngOnInit() {
    this.getBookList();
  }

  getBookList() {
    this.getBookListService.getBookList().subscribe(
      response => {
        console.log(response.json());
        this.bookList = response.json();
      },
      error => {
        console.log(error);
      }
    );
  }

  onSelect(book:Book) {
    this.selectedBook=book;
    this.router.navigate(['/viewBook', this.selectedBook.id]);
  }

  openDialog(book:Book){
    let dialogRef = this.dialog.open(DeleteDialog);
    dialogRef.afterClosed().subscribe(

      result => {
        console.log(result);
        if(result=="yes") {
          this.getBookListService.removeBook(book.id).subscribe(
            res => {
              console.log(res);
              this.getBookList();
            }, 
            err => {
              console.log(err);
            }
            );
        }
      }
    );
  }

}



@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html'
})
export class DeleteDialog {
  constructor(public dialogRef: MatDialogRef<DeleteDialog>) {}
}