import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/interfaces';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  public notes: Note[] = [
    {id: 1, title: 'title12title12title12title12title12title12title12title12title12title12title12title12title12title12title12', text: 'text1'},
    {id: 2, title: 'title2', text: 'text2'},
    {id: 3, title: 'title3', text: 'text3'}, 
    {id: 1, title: 'title1', text: 'text1'},
    {id: 2, title: 'title2', text: 'text2'},
    {id: 3, title: 'title3', text: 'text3'}, 
    {id: 1, title: 'title1', text: 'text1'},
    {id: 2, title: 'title2', text: 'text2'},
    {id: 3, title: 'title3', text: 'text3'}, 
    {id: 1, title: 'title1', text: 'text1'},
    {id: 2, title: 'title2', text: 'text2'},
    {id: 3, title: 'title3', text: 'text3'}, 
    {id: 1, title: 'title1', text: 'text1'},
    {id: 2, title: 'title2', text: 'text2'},
    {id: 3, title: 'title3', text: 'text3'}, 
    {id: 1, title: 'title1', text: 'text1'},
    {id: 2, title: 'title2', text: 'text2'},
    {id: 3, title: 'title3', text: 'text3'}, 
  ];
  public selectedNote?: Note;
  public newNote: boolean;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.notes = [...this.noteGen(20)]
    this.route.queryParamMap.subscribe(params => {
      const noteId = +params.get('id');
      this.newNote = !!params.get('new');
      console.log(this.newNote)
      this.selectNoteById(noteId)
    });
    let timerId = setInterval(() => {
      // this.selectedNote = this.notes[Math.floor(Math.random() * this.notes.length)]
      // console.log(this.newNote)
    }, 2000);
    
  }

  selectNote(note: Note) {
    this.selectedNote = {...note};
    console.log(this.selectedNote)
  }

  selectNoteById(id: number) {
    this.selectedNote = this.notes.find(note => note.id === id);
    console.log(this.selectedNote)
  }

  *noteGen(n) {
    for(let i = 1; i <= n; i++)
      yield {
        id: i, 
        title: 'title' + i, 
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et temporibus, voluptate eum nulla reiciendis ad laudantium similique quas voluptatem corporis dolorem excepturi qui dolores optio facere suscipit. Libero, laboriosam sunt.'.repeat(i)
      };
}

}
