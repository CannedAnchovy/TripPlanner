import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import { lightGreen300 } from 'material-ui/styles/colors';
import '../../css/Reader/FavoriteJournal.css';

const styles = {
  favoriteIcon: {
    color: lightGreen300,
    width: 40,
    height: 40,
  },
};


const FavoriteJournal = (props) => {
  const {
    journalId,
    favorite,
    favoriteNum,
    handleFavoriteJournalClick,
  } = props;

  let displayFavoriteIcon;
    if (favorite) {
      displayFavoriteIcon =
        (<ActionFavorite
          style={styles.favoriteIcon}
          onClick={(e) => { handleFavoriteJournalClick(e, journalId);}}
        />);
    } else {
      displayFavoriteIcon =
        (<ActionFavoriteBorder
          style={styles.favoriteIcon}
          onClick={(e) => { handleFavoriteJournalClick(e, journalId);}}
        />);
    }

  return (
    <div className="FavoriteJournal">
      <div className="favoriteIcon">
        {displayFavoriteIcon}
      </div>
      <p className="favoriteNum">
        {favoriteNum}
      </p>
    </div>
  );
};

FavoriteJournal.propTypes = {
  journalId: PropTypes.number.isRequired,
  favorite: PropTypes.bool.isRequired,
  favoriteNum: PropTypes.number.isRequired,
  handleFavoriteJournalClick: PropTypes.func.isRequired,
};

export default FavoriteJournal;
