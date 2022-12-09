import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Input() title = '';

  @Output() openClose = new EventEmitter();

  toggleStateMenu() {
    this.openClose.emit();
  }

}
