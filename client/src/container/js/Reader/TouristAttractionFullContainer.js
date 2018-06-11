import React, { Component } from 'react';
import { changeDisplayMode, changeReaderDisplayMode } from '../../../actions/displayModeAction';
import { addFavorite, deleteFavorite } from '../../../actions/favoriteListAction';
// import { attractionFavoriteAdd, attractionFavoriteMinus } from '../../../actions/Reader/attractionAction';
import { connect } from 'react-redux';
import TouristAttractionFull from '../../../component/js/Reader/TouristAttractionFull';


const mapStateToProps = state => ({
  // displayMode: state.displayMode,
  // readerDisplayMode: state.readerDisplayMode,
  attractions: state.attractions,
  favoriteList: state.favoriteList,
  journals: state.journals,
});

const mapDispatchToProps = dispatch => ({
  addFavorite: (place, name) => { dispatch(addFavorite(place, name)) },
  deleteFavorite: (name) => { dispatch(deleteFavorite(name)) },
  changeDisplay: mode => { dispatch(changeDisplayMode(mode)) },
  changeReaderDisplay: (mode, id, focus) => { dispatch(changeReaderDisplayMode(mode, id, focus))},
});



const TouristAttractionFullContainer = (props) =>{
  const {
    journals,
    attractions,
    journalId,
    touristAttraction,
    addFavorite,
    deleteFavorite,
    changeReaderDisplay,
    favoriteList,
  } = props;

  function handleAttractionClick(name){
    for ( let i = 0; i < attractions.length; i += 1) {
      for ( let j = 0; j < attractions[i].popularAttractions.length; j += 1) {
        // console.log(attractions[i].popularAttractions[j].attractionName);
        if ( attractions[i].popularAttractions[j].attractionName === name ) {
          changeReaderDisplay('attraction', i, j);
          break;
        }
      }
    }
  }

  return(
    <TouristAttractionFull
      journalId={journalId}
      favoriteList={favoriteList}
      attractions={attractions}
      touristAttraction={touristAttraction}
      handleFavoriteAttractionAdd={addFavorite}
      handleFavoriteAttractionMinus={deleteFavorite}
      handleAttractionClick={handleAttractionClick}
    />);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TouristAttractionFullContainer);