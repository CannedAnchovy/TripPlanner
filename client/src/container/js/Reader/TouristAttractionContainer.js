import React, { Component } from 'react';
import { attractionFavoriteAdd, attractionFavoriteMinus } from '../../../actions/Reader/attractionAction';
import { connect } from 'react-redux';
import TouristAttraction from '../../../component/js/Reader/TouristAttraction';


const mapStateToProps = state => ({
  // displayMode: state.displayMode,
  // readerDisplayMode: state.readerDisplayMode,
  attractions: state.attractions,
  journals: state.journals,
});

const mapDispatchToProps = dispatch => ({
  attractionFavoriteAdd: (name) => { dispatch(attractionFavoriteAdd(name)) },
  attractionFavoriteMinus: (name) => { dispatch(attractionFavoriteMinus(name)) },
});

const TouristAttractionContainer = (props) =>{
  const {
    journalId,
    touristAttraction,
    attractionFavoriteAdd,
    attractionFavoriteMinus,
  } = props;
  console.log('inFavoriteJournalContainer');
  return(
    <TouristAttraction
      journalId={journalId}
      touristAttraction={touristAttraction}
      handleFavoriteAttractionAdd={attractionFavoriteAdd}
      handleFavoriteAttractionMinus={attractionFavoriteMinus}
    />);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TouristAttractionContainer);