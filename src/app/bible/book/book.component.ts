import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibleService } from './../../services/bible.service';
import { ConfigService } from './../../services/config.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Chapters } from './../../models/book.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  id!:string;
  title:string = '';
  themeColor!: string;

  chapters: Chapters[] = [];

  constructor(
    private config: ConfigService,
    private bibleService: BibleService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe( params => {
      this.id = params.get('id')!;
      this.getBook();
    });

    this.config.suscriptionTheme
      .subscribe(color => {
        this.themeColor = color;
      })
  }

  getBook(){
    this.bibleService.oneBook(this.id)
      .subscribe(data => {
        console.log(data)
        this.chapters = data;
        this.title = data[0].reference;
      });
  }

  back(){
    this.router.navigate(['/bible']);
  }


}


