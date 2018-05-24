import React, { Component } from 'react';
import Home from './Home';
import JournalTable from './JournalTable';
import JournalEditor from './JournalEditor';
import '../css/MainDisplay.css';

class MainDisplay extends Component {
  constructor() {
    super();
    
  }
  
  render() {
  	let mainDisplay;
  	if(this.props.display === 'home') {
  		mainDisplay =
  		(<div className="MainDisplay">
          <Home />
        </div>);
  	} else if(this.props.display === 'editor_reader') {
  		mainDisplay =
  		(<div className="MainDisplay">
          <JournalEditor />
          <JournalTable />
        </div>)
  	}
    return <div>{mainDisplay}</div>;
  }
  
}

export default MainDisplay;
