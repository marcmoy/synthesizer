export const TracksConstants = {
  START_RECORDING: "START_RECORDING",
  STOP_RECORDING: "STOP_RECORDING",
  ADD_NOTES: "ADD_NOTES"
};

export const startRecording = () => ({
  type: TracksConstants.START_RECORDING,
  timeNow: new Date()
});

export const stopRecording = () => ({
  type: TracksConstants.STOP_RECORDING,
  timeNow: new Date()
});

export const addNotes = (notesArr) => ({
  type: TracksConstants.ADD_NOTES,
  timeNow: new Date(),
  notes: notesArr
});
