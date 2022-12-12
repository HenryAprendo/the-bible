import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from './../../models/book.model';
import { SharedModule } from "../../shared/shared.module";
import { BibleService } from './../../services/bible.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter, from, map} from 'rxjs';

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

  constructor(
    private router: Router,
    private bibleService: BibleService
  ){}

  ngOnInit(){
    this.getBooks();

    // this.search.valueChanges.subscribe( value => {

    //   let expression: RegExp;
    //   if(value !== null && value.length > 0){
    //     expression = RegExp(value,'i');

    //     let myFilter$ = from(this.books).pipe(
    //       filter( book => expression.test(book.name)),
    //       map( item => )
    //     )

    //     myFilter$.subscribe( books => {
    //       const newArray = [];
    //       newArray.push(books);

    //     })
    //   }
    // })

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
