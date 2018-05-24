import React, { Component } from 'react';
import '../css/JournalReader.css';
import SearchBar from './Reader/SearchBar';
import Journal from './Reader/Journal';



const JournalReader = (props) => {
  const {
    journals,
    handleFavoriteJournalClick,
    handleFavoriteTouristAttractionClick,
    handleAttractionDispalyChange,
  } = props;
  //console.log(journals);
  return (
    <div className="JournalReader">
      <SearchBar />
      <div>
        <ul className="journalList">
          {journals.map(journal => (
            <div className="displayJournal" key={journal.journalId}>
              <Journal
                journal={journal}
                handleFavoriteJournalClick = {handleFavoriteJournalClick}
                handleFavoriteTouristAttractionClick = {handleFavoriteTouristAttractionClick}
                handleAttractionDispalyChange = {handleAttractionDispalyChange}
              />
            </div>))}
        </ul>
      </div>
      <div className="bottomBar">
        <p>© 2018 by 還是當肥宅好了 with create React app</p>
      </div>
    </div>

  );
};


export default JournalReader;
