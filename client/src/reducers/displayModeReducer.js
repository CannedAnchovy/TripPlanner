export const displayModeReducer = (state = 'editor_reader', action) => {
  switch(action.type) {
    case 'CHANGE_MODE':
      return action.displayMode;
    default:
      return state;
  }
}

const init_readerDisplayMode = {
  mode: 'list',
  id: -1,
  focus: -1,
};

export const readerDisplayModeReducer = (state = init_readerDisplayMode, action) => {
  switch(action.type) {
    case 'CHANGE_READER_DISPLAY':
      // console.log('in change reader display!');
      const newMode = {
        mode: action.mode,
        id: action.id,
        focus: action.focus,
      }
      return newMode;
    default:
      return state;
  }
}