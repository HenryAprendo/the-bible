import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PageNoteComponent }  from './../page-note/page-note.component';
import { StorageNoteService } from './../../services/storage-note.service';
import { Observable } from 'rxjs';
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

  constructor(
    private storageNote: StorageNoteService,
    ){}

  ngOnInit() {
    this.storageNote.getAll()
    .subscribe( data => {
      this.notes = data;
    })
  }

  openMenu() {

  }

}













