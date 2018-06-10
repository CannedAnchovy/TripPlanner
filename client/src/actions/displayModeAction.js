export const changeDisplayMode = (mode) => ({
  type: 'CHANGE_MODE',
  displayMode: mode ,
});

export const changeReaderDisplayMode = (mode, id, focus) => ({
  type: 'CHANGE_READER_DISPLAY',
  mode: mode,
  id: id,
  focus: focus,
});