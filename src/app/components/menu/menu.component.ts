import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() notes: Note[];
  @Output() selectEvent = new EventEmitter<Note>();

  onSelect(note: Note) {
    this.selectEvent.emit(note);
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
