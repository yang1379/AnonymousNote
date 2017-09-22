import { Component, OnInit } from '@angular/core';

import { NoteService } from '../note.service';
import { NoteInfo } from '../note-info';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {

  notes: NoteInfo[] = [];

  constructor(private _noteService: NoteService) {
    console.log(`DisplayNotesComponent constructor`);
    
    this._noteService.noteObserver.subscribe(
      (notes)=>{
        this.notes = notes;
        for(let i=0; i<this.notes.length; i++) {
          console.log(this.notes[i].text);
          console.log(this.notes[i]['createdAt']);
        }
      });

      _noteService.getNotes();

    // this.notes = this._noteService.getNotes();

  }

  ngOnInit() {
  }

}
