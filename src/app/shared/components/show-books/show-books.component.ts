import { Component, Input, OnInit } from '@angular/core';
import { Books } from './../../../models/book.model';
import { flyInOutX } from './../../../animation/flyInOut';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.scss'],
  animations: [flyInOutX]
})
export class ShowBooksComponent {

  @Input() books: Books[] = [];

}
