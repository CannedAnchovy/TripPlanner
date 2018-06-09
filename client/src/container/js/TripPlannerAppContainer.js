import React, { Component } from 'react';
import { initJournals, changeReadingJournal, changeJournalsDisplay } from '../../actions/Reader/JournalAction';
import { changeDisplayMode, changeReaderDisplayMode } from '../../actions/displayModeAction';
import { connect } from 'react-redux';
import TripPlannerApp from '../../component/js/TripPlannerApp';


const mapStateToProps = state => ({
  displayMode: state.displayMode,
});

const mapDispatchToProps = dispatch => ({
  changeReaderDisplay: (mode, id, focus) => { dispatch(changeReaderDisplayMode(mode, id, focus))},
  changeDisplay: mode => { dispatch(changeDisplayMode(mode)) },
  initJournals: (journals) => { dispatch(initJournals(journals)) },
});

const TripPlannerAppContainer = (props) =>{
  const {
  	changeDisplay,
  	changeReaderDisplay,
  	initJournals,
  } = props;
  
  return(
  	<TripPlannerApp
  	  changeDisplay={changeDisplay}
  	  changeReaderDisplay={changeReaderDisplay}
  	  initJournals={initJournals}
  	/>);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TripPlannerAppContainer);