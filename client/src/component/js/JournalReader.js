import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../css/JournalReader.css';
import SearchBar from './Reader/SearchBar';
import Journal from './Reader/Journal';
import JournalHalf from './Reader/JournalHalf';
import PopularAttractionContainer from '../../container/js/Reader/PopularAttractionContainer';



class JournalReader extends Component {
  constructor() {
    super();
    this.handleAuthorClick = this.handleAuthorClick.bind(this);
    this.handleHashtagClick = this.handleHashtagClick.bind(this);
  }
  
  handleAuthorClick(name) {
    this.props.changeReaderDisplay('list', -1, -1);
    // console.log('!!!><><><><');
    // console.log(name);
    
    const newJournals = this.props.journals;
    // console.log(newJournals);
    for ( let i = 0; i < newJournals.length; i += 1) {
      if( name === newJournals[i].authorName) {
        newJournals[i].journalDisplay = true;
      } else {
        newJournals[i].journalDisplay = false;
      }
    }
    // console.log(newJournals);

    this.props.initJournals(newJournals);
    // console.log(newJournals);
  }

  handleHashtagClick(tagName) {
    // console.log('in handleHashtagClick~~');
    this.props.changeReaderDisplay('list', -1, -1);
    const newJournals = this.props.journals;
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
    this.props.initJournals(newJournals);
    
  }

  render() {
    let readerDisplay;
    let displayMode;
    if(this.props.displayMode === 'reader'){
      displayMode = 'JournalReaderFull';
    } else if (this.props.displayMode === 'editor_reader') {
      displayMode = 'JournalReaderHalf';
    }
    
    
    
    if(this.props.readerDisplay.mode === 'attraction'){
      readerDisplay =
        (<div className={displayMode}>
          <SearchBar
            handleHashtagClick={this.handleHashtagClick}
            handleFindJournalClick={this.props.handleFindJournalClick}
          />
          <PopularAttractionContainer
            journals={this.props.journals}
            displayMode={this.props.display}
            handleAuthorClick={this.handleAuthorClick}
          />
        </div>);
      } else if(this.props.readerDisplay.mode === 'list') {
      this.props.changeReadingJournal(-1);
      let journalDisplay = [];
      for (let i = 0; i < this.props.journals.length; i += 1) {
        if(this.props.journals[i].journalDisplay === true) {
          journalDisplay.push(this.props.journals[i]);
        }
      }
      readerDisplay =
      <div className={displayMode}>
        <SearchBar
          handleHashtagClick={this.handleHashtagClick}
          handleFindJournalClick={this.props.handleFindJournalClick}
        />
        <div>
          <ul className="journalList">
            {journalDisplay.map(journal => (
              <div className="displayJournal" key={journal.journalId}>
                <Journal
                  journal={journal}
                  displayMode={this.props.displayMode}
                  changeReaderDisplay={this.props.changeReaderDisplay}
                  readerDisplay={this.props.readerDisplay}
                  changeReadingJournal={this.props.changeReadingJournal}
                  changeJournalsDisplay={this.props.changeJournalsDisplay}
                  handleHashtagClick={this.handleHashtagClick}
                  handleAuthorClick={this.handleAuthorClick}
                />
              </div>))}
          </ul>
        </div>
    </div>
    } else {
      this.props.changeReadingJournal(this.props.readerDisplay.id);
      // console.log('changeReadingJournal!!!!!!!!!!!!!!');
      // console.log(this.props.readerDisplay.id);
      readerDisplay =
      (<div className={displayMode}>
        <SearchBar
          handleHashtagClick={this.handleHashtagClick}
          handleFindJournalClick={this.props.handleFindJournalClick}
        />
        <div>
          <JournalHalf
            journal={this.props.journals[this.props.readerDisplay.id]}
            changeReaderDisplay={this.props.changeReaderDisplay}
            readerDisplay={this.props.readerDisplay}
            handleHashtagClick={this.handleHashtagClick}
            handleAuthorClick={this.handleAuthorClick}
          />
        </div>
      </div>);
    }
    
    
    
      
    return <div>{readerDisplay}</div>;
  }
  
}



export default JournalReader;
