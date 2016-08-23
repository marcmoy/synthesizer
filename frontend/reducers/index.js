import { combineReducers } from 'redux';
import notesReducer from './notes_reducer';

const reducer = combineReducers({
  notes: notesReducer
});

export default reducer;
