import { Component, HostBinding, Input } from '@angular/core';
import { Books } from './../../../models/book.model';
import { flyInOutX } from './../../../animation/flyInOut';
import { filter } from './../../../animation/filter';
import { pageAnimations } from './../../../animation/pageAnimations';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.scss'],
  animations: [pageAnimations, filter]
})
export class ShowBooksComponent {

  @HostBinding('@pageAnimations')
  // public animatePage = true;

  @Input() total!:number;

  @Input() books: Books[] = [];

}
