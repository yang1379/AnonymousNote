import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

import { NoteInfo } from './note-info';

@Injectable()
export class NoteService {
  notes: NoteInfo[] = [];
  // notes = [];
  noteObserver = new BehaviorSubject(this.notes);
  

  constructor(private _http: Http) { }

  addNote(userNote: string) {
      this._http.post(`/notes`, {text: userNote}).subscribe((response) => {
        this.notes = response.json();
        console.log(this.notes);
        this.getNotes();
      },
      (err) => {
        console.log(`error`);
      }
    );

  }

  getNotes():NoteInfo {
    console.log(`getNotes()`);
    this._http.get(`/notes`)
      .subscribe((response) => {
        this.notes = response.json();


        this.notes.sort(function(a, b) {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });

        console.log("response: ", this.notes);
        for(let i=0; i<this.notes.length; i++) {
          console.log(this.notes[i].text);
          console.log(this.notes[i]['createdAt']);
        }
        this.noteObserver.next(this.notes);
      },
      (err) => {
        console.log(`error`);
      }
      );

      return;
    }
    
  // getNotes() {
  //     this._http.get(`/notes`)
  //       .subscribe((response) => {
  //         this.notes = response.json();
  //         console.log("response: ", this.notes);
  //         return this.notes;
  //       },
  //       (err) => {
  //         console.log(`error`);
  //       }
  //       );
  //     }

}
