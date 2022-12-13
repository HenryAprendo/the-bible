import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  title: string = 'Notas';

}
