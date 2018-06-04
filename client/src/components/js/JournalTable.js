import React, { Component } from 'react';
import '../css/JournalReader.css';
import JournalReader from './JournalReader';

class JournalTable extends Component {
  constructor() {
    super();
    this.state = {
      journals: [],
      attractionTable: [],
    };

    this.handleJournalAttractionDisplayChange = this.handleJournalAttractionDisplayChange.bind(this);
    this.handleFavoriteJournalClick = this.handleFavoriteJournalClick.bind(this);
    this.handleFavoriteTouristAttractionClick = this.handleFavoriteTouristAttractionClick.bind(this);
    this.handlePopularAttractionDisplayChange = this.handlePopularAttractionDisplayChange.bind(this);
    this.handleAttractionClick = this.handleAttractionClick.bind(this);
    this.handleHashtagClick = this.handleHashtagClick.bind(this);
    this.handleAuthorClick = this.handleAuthorClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handlePopularAttractionDisplayChange);
    const dataUrl = require('../json/data.json');
    const data = JSON.parse(JSON.stringify(dataUrl));
    let newJournals = data.journals;
    let newTable = data.attractionTable;
    
    let displayAttractionNum;
    if (this.props.display === 'editor_reader') {
      displayAttractionNum = 5;
    } else if (this.props.display === 'reader') {
      displayAttractionNum = 7;
    }

    for(let i=0; i < newJournals.length; i += 1) {
      if(newJournals[i].touristAttractions.length <= displayAttractionNum){
        newJournals[i].display.right = false;
      } else {
        newJournals[i].display.right = true;
      }
      newJournals[i].display.left = false;
    }
    this.setState({
      journals: newJournals,
      attractionTable: newTable,
      // attractionFocus: this.props.attractionFocus,
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handlePopularAttractionDisplayChange);
  }

  handleAttractionClick(e, name) {
    // console.log(this.state.attractionTable);
    for(let i = 0; i < this.state.attractionTable.length; i += 1) {
      for(let j = 0; j < this.state.attractionTable[i].popularAttractions.length; j += 1){
        if (name === this.state.attractionTable[i].popularAttractions[j].attractionName){
          console.log(this.state.attractionTable[i].popularAttractions[j].attractionName);
          /*
          this.setState({
            attractionFocus: {
              attraction: j,
              place: i,
              displayAttraction: true,
            }
          });
          */
          let mode = 'firstClick';
          this.props.keepAttractionFocus(true, i, j, mode);
        }
      }
    }
  }

  handleHashtagClick(e, tagName) {
    console.log('in handleHashtagClick~~');
    const newJournals = this.state.journals;
    for ( let i = 0; i < newJournals.length; i += 1) {
      let check = 0;
      for ( let j = 0; j < newJournals[i].hashtags.length; j += 1) {
        if ( tagName === newJournals[i].hashtags[j].tagName) {
          check = 1;
          break;
        }
      }
      if (check){
        newJournals[i].journalDisplay = true;
      } else {
        newJournals[i].journalDisplay = false;
      }
    }
    this.setState({
      journals: newJournals,
    });
  }

  handleAuthorClick(e, authorName) {
    this.props.handleFindJournalClick(e);
    console.log(authorName);
    const newJournals = this.state.journals;
    for ( let i = 0; i < newJournals.length; i += 1) {
      if( authorName === newJournals[i].authorName) {
        newJournals[i].journalDisplay = true;
      } else {
        newJournals[i].journalDisplay = false;
      }
    }
    this.setState({
      journals: newJournals,
    });
  }
  

  handlePopularAttractionDisplayChange(e, focusNum){
    console.log('display change');
    let newFocus;
    let mode;
    console.log(focusNum);
    if ( e.key === 'ArrowUp' && this.props.attractionFocus.attraction !== 0 ) {
      console.log('arrowup');
      newFocus = this.props.attractionFocus.attraction - 1;
      mode = 'keyPress';
    } else if ( e.key === 'ArrowDown' && this.props.attractionFocus.attraction !== this.state.attractionTable[this.props.attractionFocus.place].popularAttractions.length - 1){
      console.log('arrowdown');
      newFocus = this.props.attractionFocus.attraction + 1;
      mode = 'keyPress';
    } else if ( focusNum !== undefined ) {
      console.log('onclick');
      newFocus = focusNum;
      mode = 'click';
    } else {
      console.log('else');
      newFocus = this.props.attractionFocus.attraction;
      mode = 'notChange'
    }
    this.props.keepAttractionFocus(true, this.props.attractionFocus.place, newFocus, mode);

  }

  
  handleJournalAttractionDisplayChange(e, id, dir) {
    let displayAttractionNum;
    if (this.props.display === 'editor_reader') {
      displayAttractionNum = 5;
    } else if (this.props.display === 'reader') {
      displayAttractionNum = 7;
    }

    const newJournals = this.state.journals;
    const newDisplay = this.state.journals[id].display;
    if(dir === 'left' && newDisplay.left === true) {
      newDisplay.firstDisplay = newDisplay.firstDisplay - 1;
    } else if(dir === 'right' && newDisplay.right === true) {
      newDisplay.firstDisplay = newDisplay.firstDisplay + 1;
    }
    if(newDisplay.firstDisplay >= this.state.journals[id].touristAttractions.length-displayAttractionNum) {
      newDisplay.right = false;
    } else {
      newDisplay.right = true;
    }
    if(newDisplay.firstDisplay <= 0) {
      newDisplay.left = false;
    } else {
      newDisplay.left = true
    }
    newJournals[id].display = newDisplay
    this.setState({
      journals: newJournals,
    });
  }

  handleFavoriteJournalClick(e, id) {
    const newJournals = this.state.journals;
    if(newJournals[id].favorite === true) {
      newJournals[id].favorite = false;
      newJournals[id].favoriteNum = newJournals[id].favoriteNum - 1;
    } else {
      newJournals[id].favorite = true;
      newJournals[id].favoriteNum = newJournals[id].favoriteNum + 1;
    }
    this.setState({
      journals: newJournals,
    });
  }

  handleFavoriteTouristAttractionClick(e, journalId, AttractionId) {
    const newJournals = this.state.journals;
    const newAttractionInfo = this.state.journals[journalId].touristAttractions[AttractionId];
    if(newAttractionInfo.favoriteAttraction === true){
      newAttractionInfo.favoriteAttraction = false;
    } else {
      newAttractionInfo.favoriteAttraction = true;
    }
    newJournals[journalId].touristAttractions[AttractionId] = newAttractionInfo;
    this.setState({
      journals: newJournals,
    });
  }

  render() {
    const journals = this.state.journals;
    // console.log(journals);
    // console.log(this.props.popularListFirstDisplay)
    return (
      <JournalReader
        journals = {journals}
        handleFavoriteJournalClick={this.handleFavoriteJournalClick}
        handleFavoriteTouristAttractionClick={this.handleFavoriteTouristAttractionClick}
        handleJournalAttractionDisplayChange={this.handleJournalAttractionDisplayChange}
        handlePopularAttractionDisplayChange={this.handlePopularAttractionDisplayChange}
        handleAttractionClick={this.handleAttractionClick}
        handleHashtagClick={this.handleHashtagClick}
        handleAuthorClick={this.handleAuthorClick}
        handleSeeMoreClick={this.props.handleSeeMoreClick}
        handleFindJournalClick={this.props.handleFindJournalClick}
        handleBackJournal={this.props.handleBackJournal}
        display={this.props.display}
        displayId={this.props.displayId}
        focus={this.props.attractionFocus}
        attractionTable={this.state.attractionTable}
        popularListFirstDisplay={this.props.popularListFirstDisplay}
      />
      
    );
  }
}

export default JournalTable;
