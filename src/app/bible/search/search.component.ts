import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from './../../models/book.model';
import { SharedModule } from "../../shared/shared.module";
import { BibleService } from './../../services/bible.service';

@Component({
    standalone: true,
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    imports: [CommonModule, SharedModule]
})
export class SearchComponent {

  books: Books[] = [];

  constructor(
    private router: Router,
    private bibleService: BibleService
  ){}

  ngOnInit(){
    this.getBooks();
  }

  getBooks() {
    this.bibleService.allBooks()
      .subscribe(data => {
        this.books = data;
      });
  }

  back() {
    this.router.navigate(['/bible']);
  }

}
