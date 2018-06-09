import React, { Component } from 'react';
import { initJournals, journalFavoriteAdd, journalFavoriteMinus } from '../../../actions/Reader/JournalAction';
import { changeDisplayMode, changeReaderDisplayMode } from '../../../actions/displayModeAction';
import { connect } from 'react-redux';
import FavoriteJournal from '../../../component/js/Reader/FavoriteJournal';


const mapStateToProps = state => ({
  // displayMode: state.displayMode,
  // readerDisplayMode: state.readerDisplayMode,
  journals: state.journals,
});

const mapDispatchToProps = dispatch => ({
  journalFavoriteAdd: (id) => { dispatch(journalFavoriteAdd(id)) },
  journalFavoriteMinus: (id) => { dispatch(journalFavoriteMinus(id)) },
});

const FavoriteJournalContainer = (props) =>{
  const {
    journalId,
    favorite,
    favoriteNum,
    journalFavoriteAdd,
    journalFavoriteMinus,
  } = props;
  console.log('inFavoriteJournalContainer');
  return(
  	<FavoriteJournal
      journalId={journalId}
      favorite={favorite}
      favoriteNum={favoriteNum}
      handleFavoriteJournalAdd={journalFavoriteAdd}
      handleFavoriteJournalMinus={journalFavoriteMinus}
  	/>);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteJournalContainer);