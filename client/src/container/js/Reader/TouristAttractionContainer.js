import React, { Component } from 'react';
import { addFavorite, deleteFavorite } from '../../../actions/favoriteListAction';
// import { attractionFavoriteAdd, attractionFavoriteMinus } from '../../../actions/Reader/attractionAction';
import { connect } from 'react-redux';
import TouristAttraction from '../../../component/js/Reader/TouristAttraction';


const mapStateToProps = state => ({
  // displayMode: state.displayMode,
  // readerDisplayMode: state.readerDisplayMode,
  attractions: state.attractions,
  favoriteList: state.favoriteList,
  journals: state.journals,
  favoriteList: state.favoriteList,
});

const mapDispatchToProps = dispatch => ({
  addFavorite: (place, name) => { dispatch(addFavorite(place, name)) },
  deleteFavorite: (name) => { dispatch(deleteFavorite(name)) },
});

const TouristAttractionContainer = (props) =>{
  const {
    journalId,
    touristAttraction,
    addFavorite,
    deleteFavorite,
    attractions,
    favoriteList,
  } = props;
  return(
    <TouristAttraction
      attractions={attractions}
      journalId={journalId}
      favoriteList={favoriteList}
      touristAttraction={touristAttraction}
      handleFavoriteAttractionAdd={addFavorite}
      handleFavoriteAttractionMinus={deleteFavorite}
    />);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TouristAttractionContainer);