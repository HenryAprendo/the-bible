import { Component, Input, OnInit } from '@angular/core';
import { Books } from './../../../models/book.model';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.scss']
})
export class ShowBooksComponent {

  @Input() books: Books[] = [];

}
