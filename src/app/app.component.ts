import { Component, OnInit } from '@angular/core';
import { OpenCloseMenuService } from './services/open-close-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  openMenu: boolean = false;

  constructor(private menuService: OpenCloseMenuService){}

  ngOnInit(){
    this.menuService.menu
      .subscribe( state => {
        this.openMenu = state;
      })
  }

  toggleSideMenu() {
    this.menuService.toggleState();
  }


}
