import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import '../css/JournalReader.css';
import SearchBar from './SearchBar';

import { lightGreen500 } from 'material-ui/styles/colors';




class JournalReader extends Component {
  constructor() {
    super();
  }
  render() {
  	return(
  	  <div className="JournalReader">
        <SearchBar />
      </div>
    );
  }
}

export default JournalReader;