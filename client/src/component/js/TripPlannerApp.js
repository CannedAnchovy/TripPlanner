import React, { Component } from 'react';
import Topbar from './Topbar';
import MainDisplay from './MainDisplay';
import { BrowserRouter } from 'react-router-dom';
import '../css/Common.css';


class TripPlannerApp extends Component {
  constructor() {
    super();
    this.handleFindJournalClick = this.handleFindJournalClick.bind(this);
  }

  handleFindJournalClick(e) {
  	if(this.state.display !== 'editor_reader' && this.state.display !== 'reader'){
      this.props.changeDisplay('editor_reader');
  	}
    this.props.changeReaderDisplay('list', -1, -1);
    const dataUrl = require('../json/data.json');
    const init_journals = JSON.parse(JSON.stringify(dataUrl)).journals;
    this.props.initJournals(init_journals);
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Topbar
          handleMainDisplayChange={this.props.changeDisplay}
          handleFindJournalClick={this.handleFindJournalClick}
        />
        <MainDisplay
          handleMainDisplayChange={this.props.changeDisplay}
          handleFindJournalClick={this.handleFindJournalClick}
        />
      </div>
      </BrowserRouter>
    );
  }
}

export default TripPlannerApp;
