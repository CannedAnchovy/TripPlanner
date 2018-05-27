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
        <Home
          handleFindJournalClick={this.props.handleFindJournalClick}
        />
      </div>);
    } else if(this.props.display === 'editor_reader') {
      mainDisplay =
      (<div className="MainDisplay">
        <JournalEditor
          display={this.props.display}
        />
        <JournalTable
          handleSeeMoreClick={this.props.handleSeeMoreClick}
          handleFindJournalClick={this.props.handleFindJournalClick}
          display={this.props.display}
          displayId={this.props.displayId}
        />
      </div>)
    } else if(this.props.display === 'reader') {
      mainDisplay =
      (<div className="MainDisplay">
        <JournalTable
          handleSeeMoreClick={this.props.handleSeeMoreClick}
          handleFindJournalClick={this.props.handleFindJournalClick}
          display={this.props.display}
          displayId={this.props.displayId}
        />
      </div>)
    } else if(this.props.display === 'editor') {
      mainDisplay =
      (<div className="MainDisplay">
        <JournalEditor
          display={this.props.display}
        />
      </div>)
    }
    return <div>{mainDisplay}</div>;
  }
  
}

export default MainDisplay;
