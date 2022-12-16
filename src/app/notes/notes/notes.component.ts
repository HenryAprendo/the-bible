import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PageNoteComponent }  from './../page-note/page-note.component';
import { StorageNoteService } from './../../services/storage-note.service';
import { Note } from './../../models/note.models';
import { Color } from './../../models/color.models';


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

  //paleta de colores
  colors: Color[] = [
    { id:'1', color: 'lightsalmon', selected: false },
    { id:'2', color: 'orangered', selected: false },
    { id:'3', color: 'lightblue', selected: false },
    { id:'4', color: 'yellow', selected: false },
    { id:'5', color: 'lightpink', selected: false },
    { id:'6', color: 'violet', selected: false },
    { id:'7', color: 'cadetblue', selected: false },
    { id:'8', color: 'lightgreen', selected: false },
  ];

  //posicion del color seleccionado
  indexColorSelected!:number;

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
    this.isDisable = true;
    this.isVisibleTheme();
    this.colors[this.indexColorSelected].selected = false;
  }

  /**
   * Selecciona el color del tema y deselecciona alguno que haya sido elegido.
   *
   * @param color tema seleccionado
   * @param id del tema selecionado
   *
   * El parametro 'color' es el nuevo color del tema asignado a la propiedad newColor, a su vez el boton aceptar es
   * habilitado para cambiar el tema de la nota.
   * La lista de colores se actualiza en su propiedad selected, para deseleccionar cualquier otro tema.
   * El index del tema seleccionado es buscado para establecer su propiedad selected en true, y almacenarla para
   * nuevamente poner en falso selected al cambiar el tema.
   * De esta forma puede ver el tema marcado con un borde indicando la seleccion
   */
  chooseColor(color:string, id:string){
    this.newColor = color;
    this.isDisable = false;

    this.colors.forEach(item => item.selected = false);

    const index = this.colors.findIndex( item => item.id === id)
    if(index >= 0){
      this.colors[index].selected = true;
      this.indexColorSelected = index;
    }

  }

  isVisibleTheme(){
    this.theme = !this.theme;
  }

}













