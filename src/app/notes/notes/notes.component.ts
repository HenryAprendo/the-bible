import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PageNoteComponent }  from './../page-note/page-note.component';
import { StorageNoteService } from './../../services/storage-note.service';
import { Note } from './../../models/note.models';

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, PageNoteComponent],
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit{

  title: string = 'Notas';

  notes:Note[] = [];

  open:boolean = false;

  noteId:string = '';

  constructor(
    private storageNote: StorageNoteService,
    ){}

  ngOnInit() {
    this.storageNote.mySubscriptionNotes
      .subscribe( data => {
        this.notes = data;
      })
  }

  openMenu(id:string) {
    this.noteId = id;
    this.toggle();
  }

  toggle() {
    this.open = !this.open;
  }

  deleteNote() {
    this.storageNote.delete(this.noteId);
  }

}













