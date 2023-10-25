import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NoteComponent } from './components/note/note.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { AddNoteComponent } from './components/add-note/add-note.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NoteComponent,
    WorkspaceComponent,
    AddNoteComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
