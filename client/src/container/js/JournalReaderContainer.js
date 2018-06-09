import React, { Component } from 'react';
import { initJournals, changeReadingJournal, changeJournalsDisplay } from '../../actions/Reader/JournalAction';
import { changeDisplayMode, changeReaderDisplayMode } from '../../actions/displayModeAction';
import { connect } from 'react-redux';
import JournalReader from '../../component/js/JournalReader';


const mapStateToProps = state => ({
  displayMode: state.displayMode,
  readerDisplayMode: state.readerDisplayMode,
  journals: state.journals,
  readingJournal: state.readingJournal,
});

const mapDispatchToProps = dispatch => ({
  changeDisplay: mode => { dispatch(changeDisplayMode(mode)) },
  changeReaderDisplay: (mode, id, focus) => { dispatch(changeReaderDisplayMode(mode, id, focus))},
  initJournals: (journals) => { dispatch(initJournals(journals)) },
  changeJournalsDisplay: (id, dir, num) => { dispatch(changeJournalsDisplay(id, dir, num)) },
  changeReadingJournal: (id) => { dispatch(changeReadingJournal(id)) },
});

const JournalReaderContainer = (props) =>{
  const {
  	changeDisplay,
    changeReaderDisplay,
    readerDisplayMode,
    displayMode,
    initJournals,
    journals,
    changeReadingJournal,
    changeJournalsDisplay,
    handleFindJournalClick,
  } = props;

  let newJournals = journals;

  let displayAttractionNum;
    if (displayMode === 'editor_reader') {
      displayAttractionNum = 5;
    } else if (displayMode === 'reader') {
      displayAttractionNum = 7;
    }

  for(let i=0; i < newJournals.length; i += 1) {
    let newDisplay = Object.assign({}, newJournals[i].display);
    if(newDisplay.firstDisplay >= newJournals[i].touristAttractions.length-displayAttractionNum) {
      newDisplay.right = false;
    } else {
      newDisplay.right = true;
    }
    if(newDisplay.firstDisplay <= 0) {
      newDisplay.left = false;
    } else {
      newDisplay.left = true;
    }
    newJournals[i].display = newDisplay;
  }
  initJournals(newJournals);

    

  return(
  	<JournalReader
      changeDisplay={changeDisplay}
  	  changeReaderDisplay={changeReaderDisplay}
      readerDisplay={readerDisplayMode}
      displayMode={displayMode}
      journals={journals}
      initJournals={initJournals}
      changeJournalsDisplay={changeJournalsDisplay}
      changeReadingJournal={changeReadingJournal}
      handleFindJournalClick={handleFindJournalClick}
  	/>);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalReaderContainer);