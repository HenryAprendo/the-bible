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
      console.log(value);
      let expression: RegExp;

      if(value !== null && value.length > 0){
        expression = RegExp(value,'i')

        this.books = this.books.filter( item => {
          if(expression.test(item.name)){
            return item;
          }
          else {
            return;
          }
        });
      }
      else {
        this.books = this.data;
      }
    })
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
