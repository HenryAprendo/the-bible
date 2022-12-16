import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Note } from '../models/note.models';

@Injectable({
  providedIn: 'root'
})
export class StorageNoteService {

  notes: Note[] = [];

  myNotes$ = new BehaviorSubject<Note[]>([]);
  mySubscriptionNotes = this.myNotes$.asObservable();

  constructor() {
    this.getAll();
  }

  save(note:Note){
    this.notes.push(note);
    this.update();
    this.notifications();
  }

  getAll(): Observable<Note[]> {
    const data = localStorage.getItem('notes');
    this.notes = data ? JSON.parse(data) : [];
    this.notifications();
    return of([...this.notes]);
  }

  delete(id:string) {
    const index = this.findPosition(id);
    if(index !== null){
      this.notes.splice(index,1);

      //Actualizamos despues de eliminar
      this.update();
      this.notifications();
    }
  }

  changeBackgroundColor(color:string, id:string) {
    const index = this.findPosition(id);
    if(index !== null){
      this.notes[index].color = color;
      this.update();
      this.notifications();
    }
  }

  private findPosition(id:string) {
    const index = this.notes.findIndex( note => note.id === id);
    if(index >= 0){
      return index;
    }
    return null;
  }

  private update(){
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  private notifications(){
    this.myNotes$.next(this.notes);
  }

}



