import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { OpenCloseMenuService } from './../../services/open-close-menu.service';
import { BibleService } from './../../services/bible.service';
import { Books } from './../../models/book.model';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {

  title = 'Biblia RVR';
  books!: Books[];

  constructor(
    private menuService: OpenCloseMenuService,
    private bibleService: BibleService,
  ){}

  ngOnInit(){
    this.getBooks();
  }

  openCloseMenu() {
    this.menuService.toggleState();
  }

  getBooks() {
    this.bibleService.allBooks()
      .subscribe(data => {
        this.books = data;
      })
  }

}







