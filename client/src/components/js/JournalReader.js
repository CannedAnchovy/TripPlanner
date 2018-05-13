import React, { Component } from 'react';
import '../css/JournalReader.css';
import SearchBar from './Reader/SearchBar';
import Journal from './Reader/Journal';

class JournalReader extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="JournalReader">
        <SearchBar />
        <Journal />
      </div>
    );
  }
}

export default JournalReader;
