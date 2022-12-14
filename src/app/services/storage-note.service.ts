import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Note } from '../models/note.models';

@Injectable({
  providedIn: 'root'
})
export class StorageNoteService {

  notes: Note[] = [];

  constructor() {
    this.getAll();
    console.log(this.notes)
  }

  save(note:Note){
    this.notes.push(note);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  getAll(): Observable<Note[]> {
    const data = localStorage.getItem('notes');
    this.notes = data ? JSON.parse(data) : [];
    return of([...this.notes]);
  }

  delete(id:string) {
    const index = this.notes.findIndex( note => note.id === id);
    this.notes.splice(index,1);
    //Actualizamos despues de eliminar
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

}



