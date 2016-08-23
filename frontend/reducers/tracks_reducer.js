import { TracksConstants } from '../actions/tracks_actions';
import { merge } from 'lodash/merge';

let currTrackId = 0;

// export const tracks = (oldState = {}, action) => {
//   switch(action.type){
//     case TracksConstants.START_RECORDING:
//       currTrackId++;
//
//       let nextState = merge({}, oldState);
//
//       nextState.id = currTrackId;
//       nextState.name = action.name;
//       nextState.roll = action.roll;
//       nextState.timeStart = action.timeStart;
//
//       return nextState;
//     default:
//       return oldState;
//   }
// };
