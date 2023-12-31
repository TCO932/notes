import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/interfaces';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: Note = {id: '', title: '', text: ''}
  
  constructor() { }

  ngOnInit(): void {
  }
}
