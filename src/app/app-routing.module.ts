import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './../app/bible/book/book.component';
import { SearchComponent } from './../app/bible/search/search.component';
import { CreateNoteComponent } from './notes/create-note/create-note.component';
import { SettingComponent } from './../app/settings/setting/setting.component';


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
    path: 'create-note',
    component: CreateNoteComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








