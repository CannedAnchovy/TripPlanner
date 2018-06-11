import React from 'react';
import PropTypes from 'prop-types';
// import img from '../../img/img0.jpg'
// material ui
import ToggleStarBorder from '@material-ui/icons/StarBorder';
import ToggleStar from '@material-ui/icons/Star';
import ActionFavorite from '@material-ui/icons/Favorite';
import ActionFavoriteBorder from '@material-ui/icons/FavoriteBorder';
import yellow from '@material-ui/core/colors/yellow';
import lightGreen from '@material-ui/core/colors/lightGreen';
import '../../css/Reader/TouristAttractionFull.css';
import '../../css/Reader/TouristAttraction.css';

const styles = {
  favoriteIcon: {
    color: lightGreen[300],
    width: 35,
    height: 35,
  },
  stars: {
    color: yellow[700],
    width: 35,
    height: 35,
  },
};




const TouristAttractionFull = (props) => {
  const {
    journalId,
    attractions,
    touristAttraction,
    //handleFavoriteTouristAttractionClick,
    handleAttractionClick,
    //changeReaderDisplay,
    handleFavoriteAttractionAdd,
    handleFavoriteAttractionMinus,
    favoriteList,
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

  if (favorite) {
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
  const starsDisplay = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < touristAttraction.stars) {
      starsDisplay.push(<ToggleStar style={styles.stars} />);
    } else {
      starsDisplay.push(<ToggleStarBorder style={styles.stars} />);
    }
  }
  return (
    <div className="TouristAttractionFull">
      <img
        className="touristAttractionFullImg"
        src={imgUrl}
        alt={touristAttraction.attractionName}
        width="320"
        height="240"
      />
      <p
        className="touristAttractionFullName"
        onClick={e => { handleAttractionClick(touristAttraction.attractionName); }}
      >{touristAttraction.attractionName}</p>
      <div className="favoriteAttactionFullIcon">
        {displayFavoriteAttraction}
      </div>
      <p className="touristAttractionFullTime">{`停留時間： ${touristAttraction.stayTime} 分`}</p>
      <p className="touristAttractionFullMoney">{`平均花費： ${touristAttraction.money} 元`}</p>
      <div>
        <ul className="starsDisplay">
          {starsDisplay.map(star => (
            <div className="star">{star}</div>))}
        </ul>
      </div>
      <div className="touristAttractionFullComment">
        <p>{touristAttraction.comment}</p>
      </div>
    </div>
  );
};

TouristAttractionFull.propTypes = {
  touristAttraction: PropTypes.shape({
    attractionId: PropTypes.number.isRequired,
    attractionName: PropTypes.string.isRequired,
    favoriteAttraction: PropTypes.bool.isRequired,
  }).isRequired,
  journalId: PropTypes.number.isRequired,
  handleFavoriteTouristAttractionClick: PropTypes.func.isRequired,

};

export default TouristAttractionFull;
