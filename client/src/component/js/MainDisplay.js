import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import JournalTable from './JournalTable';
import JournalEditor from './JournalEditor';
import '../css/MainDisplay.css';

class MainDisplay extends Component {
  constructor() {
    super();
  }

  render() {
  	// console.log(this.props.popularListFirstDisplay);
    let mainDisplay;
    let HomePage =
      (<div className="MainDisplay">
        <Home
          handleFindJournalClick={this.props.handleFindJournalClick}
        />
      </div>);
    let Reader =
      (<JournalTable
        handleSeeMoreClick={this.props.handleSeeMoreClick}
        handleFindJournalClick={this.props.handleFindJournalClick}
        handleBackJournal={this.props.handleBackJournal}
        display={this.props.display}
        displayId={this.props.displayId}
        keepAttractionFocus={this.props.keepAttractionFocus}
        attractionFocus={this.props.attractionFocus}
        popularListFirstDisplay={this.props.popularListFirstDisplay}
      />)
    let Editor =
      (<JournalEditor
        display={this.props.display}
      />);

    mainDisplay =
    (<div className="MainDisplay">
      <Switch>
        <Route exact path="/" component={ () => (HomePage) } />
        <Route path="/aboutus" component={ AboutUs } />
        <Route path="/reader" component={() => (Reader) } />
        <Route path="/editor" component={() => (Editor)} />
        <Route path="/editor_reader" component={() =>(<div className="MainDisplay">{Editor}{Reader}</div>)} />
      </Switch>
    </div>);
    /*
    if(this.props.display === 'home') {
      mainDisplay =
      (<div className="MainDisplay">
        <Home
          handleFindJournalClick={this.props.handleFindJournalClick}
        />
      </div>);
    } else if(this.props.display === 'aboutus') {
	  mainDisplay =
      (<div className="MainDisplay">
        <AboutUs />
      </div>)
    }
    else if(this.props.display === 'editor_reader') {
      mainDisplay =
      (<div className="MainDisplay">
        <JournalEditor
          display={this.props.display}
        />
        <JournalTable
          handleSeeMoreClick={this.props.handleSeeMoreClick}
          handleFindJournalClick={this.props.handleFindJournalClick}
          handleBackJournal={this.props.handleBackJournal}
          display={this.props.display}
          displayId={this.props.displayId}
          keepAttractionFocus={this.props.keepAttractionFocus}
          attractionFocus={this.props.attractionFocus}
          popularListFirstDisplay={this.props.popularListFirstDisplay}
        />
      </div>)
    } else if(this.props.display === 'reader') {
      mainDisplay =
      (<div className="MainDisplay">
        <JournalTable
          handleSeeMoreClick={this.props.handleSeeMoreClick}
          handleFindJournalClick={this.props.handleFindJournalClick}
          handleBackJournal={this.props.handleBackJournal}
          display={this.props.display}
          displayId={this.props.displayId}
          keepAttractionFocus={this.props.keepAttractionFocus}
          attractionFocus={this.props.attractionFocus}
          popularListFirstDisplay={this.props.popularListFirstDisplay}
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
    */
    return <div>{mainDisplay}</div>;
 
  }
  
}

export default MainDisplay;
