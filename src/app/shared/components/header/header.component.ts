import { Component, Input, OnInit } from '@angular/core';
import { OpenCloseMenuService } from './../../../services/open-close-menu.service';
import { ConfigService } from './../../../services/config.service';
import { TitleStrategy } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = 'my title';

  themeColor!: string;

  constructor(
    private menuService: OpenCloseMenuService,
    private config: ConfigService
  ){}

  ngOnInit() {
    this.config.suscriptionTheme
      .subscribe( color => {
        this.themeColor = color;
      })
  }

  openCloseMenu() {
    this.menuService.toggleState();
  }


}
