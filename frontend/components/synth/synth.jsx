import React from 'react';
import { NOTE_NAMES, TONES, translateKey } from '../../util/tones';
import Note from '../../util/note';
import NoteKey from './note_key'
import $ from 'jquery';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.playNotes = this.playNotes.bind(this);

    this.notes = NOTE_NAMES.map(noteName => {
      return {
        noteName: noteName,
        noteObj: new Note(TONES[noteName])
      };
    });
  }

  onKeyDown(e) {
    this.props.keyPressed(this.grabEventKey(e));
  }

  onKeyUp(e) {
    this.props.keyReleased(this.grabEventKey(e));
  }

  grabEventKey(e) {
    const keyCode = e.keyCode;
    return String.fromCharCode(keyCode).toLowerCase();
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes() {
    let translatedNotes = this.props.notes.map(note =>{
      return translateKey(note);
    });

    this.notes.forEach(note => {
      if (translatedNotes.includes(note.noteName)) {
        note.noteObj.start();
      } else {
        note.noteObj.stop();
      }
    });
  }

  render() {
    this.playNotes();

    let noteKeys = NOTE_NAMES.map((noteName, idx) => {
      return <NoteKey key={idx} noteName={noteName}/>
    })

    return (
      <div className="keyboard">
        {noteKeys}
      </div>
    );
  }
}

export default Synth;
