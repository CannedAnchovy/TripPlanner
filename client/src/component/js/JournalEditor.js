import React from 'react';
import JournalEditorHalf from './Editor/JournalEditorHalf';
import JournalEditorFull from './Editor/JournalEditorFull';

const JournalEditor = (props) => {
  console.log(props)
  if(props.display === "editor_reader") {
    return <JournalEditorHalf />;
  } else {
    return <JournalEditorFull />;
  }
}

export default JournalEditor;
