import React, { Component } from 'react';
import '../css/JournalEditor.css';


class JournalEditor extends Component {
  constructor() {
    super();
  }
  render() {
    let displayMode;
    if (this.props.display === 'editor_reader') {
      displayMode = 'JournalEditorHalf';
    } else if (this.props.display === 'editor') {
      displayMode = 'JournalEditorFull';
    }
    return (
      <div className={displayMode}>
        <p>Editor</p>
      </div>
    );
  }
}

export default JournalEditor;
