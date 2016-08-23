import { TracksConstants } from '../actions/tracks_actions';

export const recording = (oldState = false, action) => {
  switch(action.type){
    case TracksConstants.START_RECORDING:
      return true;
    case TracksConstants.STOP_RECORDING:
      return false;
    default:
      return oldState;
  }
};
