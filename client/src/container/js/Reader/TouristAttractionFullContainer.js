import React, { Component } from 'react';
import { changeDisplayMode, changeReaderDisplayMode } from '../../../actions/displayModeAction';
import { attractionFavoriteAdd, attractionFavoriteMinus } from '../../../actions/Reader/attractionAction';
import { connect } from 'react-redux';
import TouristAttractionFull from '../../../component/js/Reader/TouristAttractionFull';


const mapStateToProps = state => ({
  // displayMode: state.displayMode,
  // readerDisplayMode: state.readerDisplayMode,
  attractions: state.attractions,
  journals: state.journals,
});

const mapDispatchToProps = dispatch => ({
  attractionFavoriteAdd: (name) => { dispatch(attractionFavoriteAdd(name)) },
  attractionFavoriteMinus: (name) => { dispatch(attractionFavoriteMinus(name)) },
  changeDisplay: mode => { dispatch(changeDisplayMode(mode)) },
  changeReaderDisplay: (mode, id, focus) => { dispatch(changeReaderDisplayMode(mode, id, focus))},
});



const TouristAttractionFullContainer = (props) =>{
  const {
    journals,
    attractions,
    journalId,
    touristAttraction,
    attractionFavoriteAdd,
    attractionFavoriteMinus,
    changeReaderDisplay,
  } = props;
  console.log('inFavoriteJournalContainer');
  

  // console.log(attractions);

  function handleAttractionClick(name){
    for ( let i = 0; i < attractions.length; i += 1) {
      console.log(i);
      for ( let j = 0; j < attractions[i].popularAttractions.length; j += 1) {
        // console.log(attractions[i].popularAttractions[j].attractionName);
        console.log(j);
        if ( attractions[i].popularAttractions[j].attractionName === name ) {
          console.log(name);
          changeReaderDisplay('attraction', i, j);
          break;
        }
      }
    }
  }

  return(
    <TouristAttractionFull
      journalId={journalId}
      touristAttraction={touristAttraction}
      handleFavoriteAttractionAdd={attractionFavoriteAdd}
      handleFavoriteAttractionMinus={attractionFavoriteMinus}
      handleAttractionClick={handleAttractionClick}
    />);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TouristAttractionFullContainer);