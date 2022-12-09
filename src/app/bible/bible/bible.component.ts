import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { OpenCloseMenuService } from './../../services/open-close-menu.service';

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule],
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent {

  title = 'Biblia RVR';

  constructor(private menuService: OpenCloseMenuService){}

  openCloseMenu() {
    this.menuService.toggleState();
  }

}
