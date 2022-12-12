import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './../app/bible/book/book.component';
import { SearchComponent } from './../app/bible/search/search.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
