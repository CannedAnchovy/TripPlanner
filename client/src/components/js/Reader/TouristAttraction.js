import React from 'react';
import PropTypes from 'prop-types';
// import img from '../../img/img0.jpg'
// material ui
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import { lightGreen300 } from 'material-ui/styles/colors';
import '../../css/Reader/TouristAttraction.css';

const styles = {
  favoriteIcon: {
    color: lightGreen300,
    width: 25,
    height: 25,
  },
};

const TouristAttraction = (props) => {
  const {
    journalId,
    touristAttraction,
  } = props;
  const imgUrl = require(`../../img/img${journalId}_${touristAttraction.attractionId}.jpg`);
  let displayFavoriteAttraction;
  if (touristAttraction.favoriteAttraction) {
    displayFavoriteAttraction =
      (<ActionFavorite
        style={styles.favoriteIcon}
      />);
  } else {
    displayFavoriteAttraction =
      (<ActionFavoriteBorder
        style={styles.favoriteIcon}
      />);
  }
  return (
    <div className="TouristAttraction">
      <img
        className="touristAttractionImg"
        src={imgUrl}
        alt={touristAttraction.attractionName}
        width="200"
        height="150"
      />
      <p className="touristAttractionName">{touristAttraction.attractionName}</p>
      <div className="favoriteAttactionIcon">
        {displayFavoriteAttraction}
      </div>
    </div>
  );
};

TouristAttraction.propTypes = {
  touristAttraction: PropTypes.shape({
    attractionId: PropTypes.number.isRequired,
    attractionName: PropTypes.string.isRequired,
    favoriteAttraction: PropTypes.bool.isRequired,
  }).isRequired,
  journalId: PropTypes.number.isRequired,
};

export default TouristAttraction;
