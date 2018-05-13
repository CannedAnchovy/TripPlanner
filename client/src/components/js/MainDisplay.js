import React, { Component } from 'react';
import JournalReader from './JournalReader';
import JournalEditor from './JournalEditor';
import '../css/MainDisplay.css';

class MainDisplay extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="MainDisplay">
        <JournalEditor />
        <JournalReader />
      </div>
    );
  }
}

export default MainDisplay;
