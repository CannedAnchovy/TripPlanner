import React from 'react';
import PropTypes from 'prop-types';
import ActionFavorite from '@material-ui/icons/Favorite';
import ActionFavoriteBorder from '@material-ui/icons/FavoriteBorder';
import lightGreen from '@material-ui/core/colors/lightGreen';
import '../../css/Reader/FavoriteJournal.css';

const styles = {
  favoriteIcon: {
    color: lightGreen[300],
    width: 40,
    height: 40,
  },
};


const FavoriteJournal = (props) => {
  const {
    journalId,
    favorite,
    favoriteNum,
    handleFavoriteJournalAdd,
    handleFavoriteJournalMinus,
  } = props;

  console.log({journalId, favorite, favoriteNum});

  let displayFavoriteIcon;
  if (favorite) {
    displayFavoriteIcon =
      (<ActionFavorite
        style={styles.favoriteIcon}
        onClick={(e) => { handleFavoriteJournalMinus(journalId); }}
      />);
  } else {
    displayFavoriteIcon =
      (<ActionFavoriteBorder
        style={styles.favoriteIcon}
        onClick={(e) => { handleFavoriteJournalAdd(journalId); }}
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
