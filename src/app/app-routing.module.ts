import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NoteComponent } from './components/note/note.component';


const routes: Routes = [
  { path: 'notes/:id:new', component: NoteComponent },
  { path: 'new-note', component: AddNoteComponent },
  { path: '**', redirectTo: 'notes/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
