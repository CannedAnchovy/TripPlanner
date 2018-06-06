import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
    console.log(this.props.focus);
    let journalDisplay = [];
      for (let i = 0; i < this.props.journals.length; i += 1) {
        if(this.props.journals[i].journalDisplay === true) {
          journalDisplay.push(this.props.journals[i]);
        }
      }
    let List =
      (<div>
        <SearchBar />
        <div>
          <ul className="journalList">
            {journalDisplay.map(journal => (
              <div className="displayJournal" key={journal.journalId}>
                <Journal
                  journal={journal}
                  displayMode={this.props.display}
                  handleFavoriteJournalClick = {this.props.handleFavoriteJournalClick}
                  handleFavoriteTouristAttractionClick = {this.props.handleFavoriteTouristAttractionClick}
                  handleJournalAttractionDisplayChange = {this.props.handleJournalAttractionDisplayChange}
                  handleSeeMoreClick = {this.props.handleSeeMoreClick}
                  handleHashtagClick={this.props.handleHashtagClick}
                  handleAuthorClick={this.props.handleAuthorClick}
                />
              </div>))}
          </ul>
        </div>
      </div>)
    const JournalSelect =
      (<div>
        <SearchBar />
        <div>
          <JournalHalf
            journal={this.props.journals[this.props.displayId]}
            handleAttractionClick={this.props.handleAttractionClick}
            handleFindJournalClick={this.props.handleFindJournalClick}
            handleFavoriteJournalClick = {this.props.handleFavoriteJournalClick}
            handleFavoriteTouristAttractionClick = {this.props.handleFavoriteTouristAttractionClick}            
            handleAttractionDisplayChange = {this.props.handleAttractionDisplayChange}
            handleAuthorClick={this.props.handleAuthorClick}
          />
        </div>
      </div>);
    const path=`/${this.props.display}`;
    console.log(this.props.journals);

    readerDisplay=
      (<div className={displayMode}>
        <Switch>
          <Route path={`/${this.props.display}/journalList`} component={ () => (List)} />
          <Route path={`/${this.props.display}/journal`} component={() => (JournalSelect)}/>
        </Switch>
      </div>)
    */
    
    if(this.props.focus.displayAttraction === true){
      readerDisplay =
        (<div className={displayMode}>
          <SearchBar />
          <PopularAttractionTable
            journals={this.props.journals}
            displayMode={this.props.display}
            focus={this.props.focus}
            attractionTable={this.props.attractionTable}
            firstDisplay={this.props.popularListFirstDisplay}
            handleBackJournal={this.props.handleBackJournal}
            handlePopularAttractionDisplayChange={this.props.handlePopularAttractionDisplayChange}
            handleAuthorClick={this.props.handleAuthorClick}
          />
        </div>);
      } else if(this.props.displayId === -1) {
      let journalDisplay = [];
      for (let i = 0; i < this.props.journals.length; i += 1) {
        if(this.props.journals[i].journalDisplay === true) {
          journalDisplay.push(this.props.journals[i]);
        }
      }
      readerDisplay =
      <div className={displayMode}>
        <SearchBar />
        <div>
          <ul className="journalList">
            {journalDisplay.map(journal => (
              <div className="displayJournal" key={journal.journalId}>
                <Journal
                  journal={journal}
                  displayMode={this.props.display}
                  handleFavoriteJournalClick = {this.props.handleFavoriteJournalClick}
                  handleFavoriteTouristAttractionClick = {this.props.handleFavoriteTouristAttractionClick}
                  handleJournalAttractionDisplayChange = {this.props.handleJournalAttractionDisplayChange}
                  handleSeeMoreClick = {this.props.handleSeeMoreClick}
                  handleHashtagClick={this.props.handleHashtagClick}
                  handleAuthorClick={this.props.handleAuthorClick}
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
            handleAttractionClick={this.props.handleAttractionClick}
            handleFindJournalClick={this.props.handleFindJournalClick}
            handleFavoriteJournalClick = {this.props.handleFavoriteJournalClick}
            handleFavoriteTouristAttractionClick = {this.props.handleFavoriteTouristAttractionClick}            
            handleAttractionDisplayChange = {this.props.handleAttractionDisplayChange}
            handleAuthorClick={this.props.handleAuthorClick}
          />
        </div>
      </div>);
    }
    
    
    
      
    return <div>{readerDisplay}</div>;
  }
  
}



export default JournalReader;
