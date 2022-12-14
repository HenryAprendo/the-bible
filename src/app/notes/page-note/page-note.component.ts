import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from './../../models/note.models';
import { NoteComponent} from './../note/note.component';


@Component({
  standalone: true,
  imports: [CommonModule, NoteComponent],
  selector: 'app-page-note',
  templateUrl: './page-note.component.html',
  styleUrls: ['./page-note.component.scss']
})
export class PageNoteComponent {

  @Input() notes!: Note[];

  @Output() eventNote = new EventEmitter<string>();

  onClick(id:string) {
    this.eventNote.emit(id);
  }

}
