import React, { Component } from 'react';
import { initJournals, journalFavoriteAdd, journalFavoriteMinus } from '../../../actions/Reader/JournalAction';
import { changeDisplayMode, changeReaderDisplayMode } from '../../../actions/displayModeAction';
import { connect } from 'react-redux';
import FavoriteJournal from '../../../component/js/Reader/FavoriteJournal';


const mapStateToProps = state => ({
  // displayMode: state.displayMode,
  // readerDisplayMode: state.readerDisplayMode,
  journals: state.journals,
  journalFavoriteList: state.journalFavoriteList,
});

const mapDispatchToProps = dispatch => ({
  journalFavoriteAdd: (id) => { dispatch(journalFavoriteAdd(id)) },
  journalFavoriteMinus: (id) => { dispatch(journalFavoriteMinus(id)) },
});

const FavoriteJournalContainer = (props) =>{
  const {
    journals,
    journalId,
    favorite,
    favoriteNum,
    journalFavoriteAdd,
    journalFavoriteMinus,
    journalFavoriteList,
  } = props;
  // console.log(journals[journalId]);
  return(
  	<FavoriteJournal
      journal={journals[journalId]}
      journalId={journalId}
      favorite={favorite}
      favoriteNum={favoriteNum}
      handleFavoriteJournalAdd={journalFavoriteAdd}
      handleFavoriteJournalMinus={journalFavoriteMinus}
      journalFavoriteList={journalFavoriteList}
  	/>);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteJournalContainer);