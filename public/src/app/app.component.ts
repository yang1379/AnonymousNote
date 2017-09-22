import { Component } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

import { NoteService } from './note.service';

// import {BehaviorSubject} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notes';
  notes = [];
  userNote: string = "";

  // taskObserver: BehaviorSubject<Note> = new BehaviorSubject(this.notes);

  // notes: Array<Note> = [];

  constructor(private _http: Http, private _noteService: NoteService) {
    // this._noteService.getNotes();
    // this._taskService.taskObserver.subscribe((notes) => {
    //   this.notes = notes;
    // });

    // console.log(`app.component constructor`);
    // this._http.get(`/notes`)
    //   .map( data => data.json() )
    //   .toPromise()
    //   .then( (output) => {
    //     this.notes = output;
    //   })
    //   .catch( (err) => {
    //     console.log(`Error`);
    //   });

    //   this._http.get(`/notes`).subscribe((response) => {
    //     this.notes = response.json();
    //     console.log("response: ", this.notes);
    //     console.log("response: ", this.notes[0]["text"]);
    //   },
    //   (err) => {
    //     console.log(`error`);
    //   }
    // );

  //   this._http.post(`/notes`, {text: "post notes test"}).subscribe((response) => {
  //     this.notes = response.json();
  //   },
  //   (err) => {
  //     console.log(`error`);
  //   }
  // );

    // this._http.get('/notes').subscribe( (response) => {
    //   this.notes = response.json();
    //   this.taskObserver.next(this.notes);
    // });
  
  }

  addNote() {
    this._noteService.addNote(this.userNote);
    this.userNote = "";
  }

  // getNotes() {
  //   this._taskService.getTasks();
  // }

}
