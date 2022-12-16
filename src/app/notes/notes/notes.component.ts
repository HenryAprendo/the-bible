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

  //abrir y cerrar el menu de opciones
  open:boolean = false;

  //abrir y cerrar el menu de temas.
  theme:boolean = false;

  //id de la nota seleccionada
  noteId:string = '';

  //paleta de colores para el cambio del background-color
  colors:string[] = [
    'palevioletred',
    'orangered',
    'lightblue',
    'yellow',
    'lightpink',
    'violet',
    'cadetblue',
    'lightgreen'
  ];

  newColor:string = '';

  //Habilita el boton aceptar cuando es elegido un nuevo color
  isDisable:boolean = true;

  constructor(
    private storageNote: StorageNoteService,
  ){}

  ngOnInit() {
    this.storageNote.mySubscriptionNotes
      .subscribe( data => {
        this.notes = data;
      })
  }

  //abre el menu de opciones desde el componente note.
  openMenu(id:string) {
    this.noteId = id;
    this.toggleOpen();
  }

  toggleOpen() {
    this.open = !this.open;
  }

  //elimina una nota
  deleteNote() {
    this.storageNote.delete(this.noteId);
  }

  //cambio del background-color de una nota especifica
  changeColor(){
    this.storageNote.changeBackgroundColor(this.newColor,this.noteId);
    console.log('cambio')
    this.isDisable = true;
    this.isVisibleTheme();
  }

  //selecciona el color del tema
  chooseColor(color:string){
    this.newColor = color;
    this.isDisable = false;
    console.log(color);
  }

  isVisibleTheme(){
    this.theme = !this.theme;
  }

}













