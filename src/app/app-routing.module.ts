import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'bible',
    pathMatch: 'full'
  },
  {
    path: 'bible',
    loadComponent: () => import('./bible/bible/bible.component').then(m => m.BibleComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
