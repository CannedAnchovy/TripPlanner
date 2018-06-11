import React from 'react';
import PropTypes from 'prop-types';
// import img from '../../img/img0.jpg'
// material ui
import ActionFavorite from '@material-ui/icons/Favorite';
import ActionFavoriteBorder from '@material-ui/icons/FavoriteBorder';
import lightGreen from '@material-ui/core/colors/lightGreen';
import '../../css/Reader/TouristAttraction.css';

const styles = {
  favoriteIcon: {
    color: lightGreen[300],
    width: 25,
    height: 25,
  },
};

const TouristAttraction = (props) => {
  const {
    journalId,
    touristAttraction,
    attractions,
    favoriteList,
    handleFavoriteAttractionAdd,
    handleFavoriteAttractionMinus,
  } = props;
  const imgUrl = require(`../../img_journal/img${journalId}_${touristAttraction.attractionId}.jpg`);
  let displayFavoriteAttraction;
  let favorite = false;
  for( let i = 0; i < favoriteList.length; i += 1) {
    if(favoriteList[i].name === touristAttraction.attractionName) {
      favorite = true;
    }
  }
  let place = '';
  for( let i = 0; i < attractions.length; i += 1) {
    for( let j = 0; j < attractions[i].popularAttractions.length; j += 1){
      if(attractions[i].popularAttractions[j].attractionName === touristAttraction.attractionName) {
        place = attractions[i].placeName;
      }
    }
  }

  if (favorite === true) {
    displayFavoriteAttraction =
      (<ActionFavorite
        style={styles.favoriteIcon}
        onClick={(e) => { handleFavoriteAttractionMinus(touristAttraction.attractionName); }}
      />);
  } else {
    displayFavoriteAttraction =
      (<ActionFavoriteBorder
        style={styles.favoriteIcon}
        onClick={(e) => { handleFavoriteAttractionAdd(place, touristAttraction.attractionName); }}
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
