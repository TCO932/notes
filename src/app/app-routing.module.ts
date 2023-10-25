import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './components/add-note/add-note.component';


const routes: Routes = [
  { path: 'notes/:id', component: AppComponent },
  { path: 'new-note', component: AddNoteComponent },
  { path: '**', redirectTo: 'notes/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
