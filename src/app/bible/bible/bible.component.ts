import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { OpenCloseMenuService } from './../../services/open-close-menu.service';
import { BibleService } from './../../services/bible.service';
import { Books } from './../../models/book.model';
import { RouterModule } from '@angular/router';
import { ConfigService } from './../../services/config.service';

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss'],
})
export class BibleComponent implements OnInit {

  title = 'Biblia RVR';

  themeColor!:string;

  books!: Books[];

  constructor(
    private menuService: OpenCloseMenuService,
    private bibleService: BibleService,
    private config: ConfigService
  ){}

  ngOnInit(){
    this.getBooks();
    this.config.suscriptionTheme
      .subscribe( color => {
        this.themeColor = color;
      })
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







