import React, { Component } from 'react';
import Topbar from './Topbar';
import MainDisplay from './MainDisplay';
import '../css/Common.css';


class TripPlannerApp extends Component {
  constructor() {
    super();
    this.state = {
      display: 'editor_reader',
      displayJournalId: -1,
      attractionFocus: { dispalyAttraction: false, place: 0, attraction: 0},
      popularListFirstDisplay: 0,
    };
    this.handleMainDisplayChange = this.handleMainDisplayChange.bind(this);
    this.handleSeeMoreClick = this.handleSeeMoreClick.bind(this);
    this.handleFindJournalClick = this.handleFindJournalClick.bind(this);
    this.keepAttractionFocus = this.keepAttractionFocus.bind(this);
    this.handleBackJournal = this.handleBackJournal.bind(this);
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
      attractionFocus:{
  	  	displayAttraction: false,
  	  	place: 0,
  	  	attraction: 0,
  	  },
  	  popularListFirstDisplay: 0,
    });
  }

  handleBackJournal(e){
  	this.setState({
  	  attractionFocus:{
  	  	displayAttraction: false,
  	  	place: 0,
  	  	attraction: 0,
  	  },
  	  popularListFirstDisplay: 0,
  	});
  }

  keepAttractionFocus(display, place, attraction, mode) {
  	if(mode === 'keyPress'){
  	  if (attraction<this.state.popularListFirstDisplay) {
        this.setState({
          popularListFirstDisplay: attraction,
        });
      } else if (attraction>this.state.popularListFirstDisplay+7) {
        this.setState({
          popularListFirstDisplay: attraction-7,
        });
      }
  	} else if(mode === 'firstClick' && attraction > 7){
  	  this.setState({
        popularListFirstDisplay: attraction-7,
      });
  	} else {
  	  console.log('hihihih~~');
  	  this.setState({
  	  	popularListFirstDisplay: this.state.popularListFirstDisplay,
  	  });
  	}
  	
  	this.setState({
  	  attractionFocus:{
  	  	displayAttraction: true,
  	  	place: place,
  	  	attraction: attraction,
  	  },
  	});
  }

  render() {
  	console.log(this.state.popularListFirstDisplay);
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
          handleBackJournal={this.handleBackJournal}
          keepAttractionFocus={this.keepAttractionFocus}
          attractionFocus={this.state.attractionFocus}
          popularListFirstDisplay={this.state.popularListFirstDisplay}

        />
      </div>
    );
  }
}

export default TripPlannerApp;
