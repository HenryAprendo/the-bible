import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './../app/bible/book/book.component';
import { SearchComponent } from './../app/bible/search/search.component';
import { NoteComponent } from './notes/note/note.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'bible',
    pathMatch: 'full'
  },
  {
    path: 'bible',
    loadComponent: () => import('./bible/bible/bible.component').then(m => m.BibleComponent)
  },
  {
    path: 'book/:id',
    component: BookComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'notes',
    loadComponent: () => import('./notes/notes/notes.component').then(m => m.NotesComponent)
  },
  {
    path: 'note',
    component: NoteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








