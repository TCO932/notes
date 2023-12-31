import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Note } from 'src/app/interfaces';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  @Input() note: Note =  {id: '', title: '', text: ''}
  @Output() addEvent = new EventEmitter<Note>();

  public noteForm = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
  });

  constructor() { }
  
  ngOnInit(): void {
  }
  
  addNote() {
    const noteData = this.noteForm.value;
    this.addEvent.emit(noteData);
  }
}
