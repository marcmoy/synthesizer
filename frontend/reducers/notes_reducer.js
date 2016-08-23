import { NotesConstants } from '../actions/notes_actions';
import { NOTE_NAMES, validKeys } from '../util/tones';



const notesReducer = (oldState = [], action) => {


  switch (action.type) {
    case NotesConstants.KEY_PRESSED:
      if (oldState.includes(action.key)) {
        return oldState;
      } else if (validKeys.includes(action.key)) {
        return [...oldState, action.key];
      } else {
        return oldState;
      }

    case NotesConstants.KEY_RELEASED:
      if (oldState.includes(action.key)) {
        return oldState.filter(key => action.key !== key);
      } else {
        return oldState;
      }

    default:
      return oldState;
  }
};



export default notesReducer;
