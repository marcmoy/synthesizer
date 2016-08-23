import { connect } from 'react-redux';
import Synth from './synth';
import { keyPressed, keyReleased } from '../../actions/notes_actions';

const mapStateToProps = (state) => ({
  notes: state.notes
});

const mapDispatchToProps = (dispatch) => ({
  keyPressed: key => dispatch(keyPressed(key)),
  keyReleased: key => dispatch(keyReleased(key))
});


// debugger;
const SynthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth);

export default SynthContainer;
