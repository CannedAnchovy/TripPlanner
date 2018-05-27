import React, { Component } from 'react';
import Topbar from './Topbar';
import MainDisplay from './MainDisplay';


class TripPlannerApp extends Component {
  constructor() {
    super();
    this.state = {
      display: 'editor_reader',
      displayJournalId: -1,
    };
    this.handleMainDisplayChange = this.handleMainDisplayChange.bind(this);
    this.handleSeeMoreClick = this.handleSeeMoreClick.bind(this);
    this.handleFindJournalClick = this.handleFindJournalClick.bind(this);
  }

  handleMainDisplayChange(e, mode) {
    this.setState({
      display: mode,
    });
  }

  handleSeeMoreClick(e, journalId) {
    this.setState({
      displayJournalId: journalId,
    });
  }

  handleFindJournalClick(e) {
  	if(this.state.display !== 'editor_reader' && this.state.display !== 'reader'){
      this.handleMainDisplayChange(e, 'editor_reader');
  	}
    this.setState({
      displayJournalId: -1,
    });
  }

  render() {
    return (
      <div>
        <Topbar
          handleMainDisplayChange={this.handleMainDisplayChange}
          handleFindJournalClick={this.handleFindJournalClick}
        />
        <MainDisplay
          handleMainDisplayChange={this.handleMainDisplayChange}
          display={this.state.display}
          displayId={this.state.displayJournalId}
          handleFindJournalClick={this.handleFindJournalClick}
          handleSeeMoreClick={this.handleSeeMoreClick}
        />
      </div>
    );
  }
}

export default TripPlannerApp;
