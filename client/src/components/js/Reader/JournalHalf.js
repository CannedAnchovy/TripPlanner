import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ActionDelete from 'material-ui/svg-icons/action/delete';
import ImageNavigateNext from '@material-ui/icons/NavigateNext';
import ImageNavigateBefore from '@material-ui/icons/NavigateBefore';
import lightGreen from '@material-ui/core/colors/lightGreen';
import grey from '@material-ui/core/colors/grey';
import FavoriteJournal from './FavoriteJournal';
import Author from './Author';
import Hashtag from './Hashtag';
import SeeMore from './SeeMore';
import TouristAttraction from './TouristAttraction';
import TouristAttractionFull from './TouristAttractionFull';

import '../../css/Reader/JournalHalf.css';
import '../../css/Reader/Journal.css';

const styles = {
  arrowStyle: {
    width: 70,
    height: 70,
    color: lightGreen[700],
  },
  donothingArrowStyle: {
    width: 70,
    height: 70,
    color: grey[700],
  }
};


class JournalHalf extends Component {
  constructor() {
    super();
  }

  render() {
    // const { items: displayItem, listId, listName } = this.props.list;
    // console.log(this.state.display.firstDisplay);
    const {
      journalId,
      journalDisplay,
      favorite,
      favoriteNum,
      authorName,
      title,
      touristAttractions,
      hashtags,
      display,
    } = this.props.journal;

    // console.log(displayAttractions);
    return (
      <div className="JournalHalf">
        <p className="journalTitleHalf">
          {title}
        </p>
        <Author
          authorName={authorName}
        />
        <FavoriteJournal
          journalId={journalId}
          favorite={favorite}
          favoriteNum={favoriteNum}
          handleFavoriteJournalClick = {this.props.handleFavoriteJournalClick}
        />

        <div className="divtouristAttractionFullList">
          <ul className="touristAttractionFullList">
            {touristAttractions.map(touristAttraction => (
              <div className="displayTouristAttractionFull" key={touristAttraction.attractionId}>
                <TouristAttractionFull
                  journalId={journalId}
                  touristAttraction={touristAttraction}
                  handleFavoriteTouristAttractionClick = {this.props.handleFavoriteTouristAttractionClick}
                />
              </div>))}
          </ul>
        </div>
      </div>
    );
  }
}
/*
JournalHalf.propTypes = {
  journal: PropTypes.shape({
    journalId: PropTypes.number.isRequired,
    journalDisplay: PropTypes.bool.isRequired,
    favorite: PropTypes.bool.isRequired,
    favoriteNum: PropTypes.number.isRequired,
    authorName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    touristAttractions: PropTypes.array.isRequired,
    hashtags: PropTypes.array.isRequired,
  }).isRequired,
  handleFavoriteJournalClick: PropTypes.func.isRequired,
};
*/
export default JournalHalf;
