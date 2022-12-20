import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from './../../models/book.model';
import { SharedModule } from "../../shared/shared.module";
import { BibleService } from './../../services/bible.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from './../../services/config.service';


@Component({
    standalone: true,
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    imports: [CommonModule, SharedModule, ReactiveFormsModule]
})
export class SearchComponent {

  search = new FormControl('');

  data:Books[] = [];

  books: Books[] = []

  themeColor!:string;

  booksTotal:number = -1;

  constructor(
    private router: Router,
    private bibleService: BibleService,
    private config: ConfigService
  ){}

  ngOnInit(){
    this.getBooks();

    this.config.suscriptionTheme
      .subscribe( color => {
        this.themeColor = color;
      })

    this.search.valueChanges.subscribe( value => {
      value = value ? value.trim() : '';
      this.books = this.data.filter(book => book.name.toLowerCase().includes(value!.toLowerCase()));
      const newTotal = this.books.length;

      if(this.booksTotal !== newTotal){
        this.booksTotal = newTotal;
      }
      else if(!value){
        this.booksTotal = -1;
      }
    });

  }

  getBooks() {
    this.bibleService.allBooks()
      .subscribe(data => {
        this.data = data;
        this.books = this.data;
      });
  }

  back() {
    this.router.navigate(['/bible']);
  }

}


