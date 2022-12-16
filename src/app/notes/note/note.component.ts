import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Note } from './../../models/note.models';

@Component({
  standalone: true,
  imports: [ CommonModule],
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

  @Input() note!: Note;

  @Output() eventClick = new EventEmitter<string>()

  onClick(id:string) {
    this.eventClick.emit(id);
  }

}
