import { Component, Input } from '@angular/core';
import { OpenCloseMenuService } from './../../../services/open-close-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title = 'my title';

  constructor(private menuService: OpenCloseMenuService){}

  openCloseMenu() {
    this.menuService.toggleState();
  }


}
