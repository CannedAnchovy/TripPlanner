import React, { Component } from 'react';
import '../css/JournalReader.css';
import SearchBar from './Reader/SearchBar';
import Journal from './Reader/Journal';
import JournalHalf from './Reader/JournalHalf';



class JournalReader extends Component {
  constructor() {
    super();
    this.state={
      displayId: -1,
    };
    this.handleSeeMoreClick = this.handleSeeMoreClick.bind(this);
  }
  
  handleSeeMoreClick(e, journalId) {
    this.setState({
      displayId: journalId,
    });
  }
  
  render() {
    let readerDisplay;
    if(this.state.displayId === -1) {
      readerDisplay =
      <div className="JournalReader">
        <SearchBar />
        <div>
          <ul className="journalList">
            {this.props.journals.map(journal => (
              <div className="displayJournal" key={journal.journalId}>
                <Journal
                  journal={journal}
                  handleFavoriteJournalClick = {this.props.handleFavoriteJournalClick}
                  handleFavoriteTouristAttractionClick = {this.props.handleFavoriteTouristAttractionClick}
                  handleAttractionDisplayChange = {this.props.handleAttractionDisplayChange}
                  handleSeeMoreClick = {this.handleSeeMoreClick}
                />
              </div>))}
          </ul>
        </div>
    </div>
    } else {
      readerDisplay =
      (<div className="JournalReader">
        <SearchBar />
        <div>
          <JournalHalf
            journal={this.props.journals[this.state.displayId]}
            handleFavoriteJournalClick = {this.props.handleFavoriteJournalClick}
            handleFavoriteTouristAttractionClick = {this.props.handleFavoriteTouristAttractionClick}            
            handleAttractionDisplayChange = {this.props.handleAttractionDisplayChange}
          />
        </div>
      </div>);
    }
    return <div>{readerDisplay}</div>;
  }
  
}



export default JournalReader;
