import React, { Component } from 'react';
import '../css/JournalReader.css';
import SearchBar from './Reader/SearchBar';
import Journal from './Reader/Journal';
import JournalHalf from './Reader/JournalHalf';
import PopularAttractionTable from './Reader/PopularAttractionTable';



class JournalReader extends Component {
  constructor() {
    super();
    
  }
  

  render() {
    let readerDisplay;
    
    // console.log(this.props.displayId);
    let displayMode;
    if(this.props.display === 'reader'){
      displayMode = 'JournalReaderFull';
    } else if (this.props.display === 'editor_reader') {
      displayMode = 'JournalReaderHalf';
    }
    /*
    if(this.props.displayId === -1) {
      readerDisplay =
      <div className={displayMode}>
        <SearchBar />
        <div>
          <ul className="journalList">
            {this.props.journals.map(journal => (
              <div className="displayJournal" key={journal.journalId}>
                <Journal
                  journal={journal}
                  displayMode={this.props.display}
                  handleFavoriteJournalClick = {this.props.handleFavoriteJournalClick}
                  handleFavoriteTouristAttractionClick = {this.props.handleFavoriteTouristAttractionClick}
                  handleAttractionDisplayChange = {this.props.handleAttractionDisplayChange}
                  handleSeeMoreClick = {this.props.handleSeeMoreClick}
                />
              </div>))}
          </ul>
        </div>
    </div>
    } else {
      readerDisplay =
      (<div className={displayMode}>
        <SearchBar />
        <div>
          <JournalHalf
            journal={this.props.journals[this.props.displayId]}
            handleFindJournalClick={this.props.handleFindJournalClick}
            handleFavoriteJournalClick = {this.props.handleFavoriteJournalClick}
            handleFavoriteTouristAttractionClick = {this.props.handleFavoriteTouristAttractionClick}            
            handleAttractionDisplayChange = {this.props.handleAttractionDisplayChange}
          />
        </div>
      </div>);
    }
    */
    readerDisplay =
      (<div className={displayMode}>
        <SearchBar />
        <PopularAttractionTable
          displayMode={this.props.display}
        />
      </div>);
    return <div>{readerDisplay}</div>;
  }
  
}



export default JournalReader;
