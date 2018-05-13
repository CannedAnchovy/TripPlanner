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

class FavoriteJournal extends Component {
  constructor() {
    super();
  }
  render() {
    let displayFavoriteIcon;
    if (this.props.favorite) {
      displayFavoriteIcon =
        (<ActionFavorite
          style={styles.favoriteIcon}
        />);
    } else {
      displayFavoriteIcon =
        (<ActionFavoriteBorder
          style={styles.favoriteIcon}
        />);
    }
    return (
      <div className="FavoriteJournal">
        <div className="favoriteIcon">
          {displayFavoriteIcon}
        </div>
        <p className="favoriteNum">
          {this.props.favoriteNum}
        </p>
      </div>
    );
  }
}

FavoriteJournal.propTypes = {
  favorite: PropTypes.bool.isRequired,
  favoriteNum: PropTypes.number.isRequired,
};

export default FavoriteJournal;
