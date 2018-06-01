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
  },
};


class Journal extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      journalId,
      favorite,
      favoriteNum,
      authorName,
      title,
      touristAttractions,
      hashtags,
      display,
    } = this.props.journal;

    let displayAttractionNum;
    if (this.props.displayMode === 'editor_reader') {
      displayAttractionNum = 5;
    } else if (this.props.displayMode === 'reader') {
      displayAttractionNum = 7;
    }
    if (touristAttractions.length < displayAttractionNum) {
      displayAttractionNum = touristAttractions.length;
    }
    const displayAttractions = [];
    for (let i = 0; i < displayAttractionNum; i += 1) {
      displayAttractions.push(touristAttractions[display.firstDisplay + i]);
    }
    let displayArrowBack;
    let displayArrowNext;
    if (display.left) {
      displayArrowBack =
        (<ImageNavigateBefore
          style={styles.arrowStyle}
          onClick={e => this.props.handleJournalAttractionDisplayChange(e, journalId, 'left')}
        />);
    } else {
      displayArrowBack =
        (<ImageNavigateBefore
          style={styles.donothingArrowStyle}
        />);
    }
    if (display.right) {
      displayArrowNext =
        (<ImageNavigateNext
          style={styles.arrowStyle}
          onClick={e => this.props.handleJournalAttractionDisplayChange(e, journalId, 'right')}
        />);
    } else {
      displayArrowNext =
        (<ImageNavigateNext
          style={styles.donothingArrowStyle}
        />);
    }

    return (
      <div className="Journal">
        <p className="journalTitle">
          {title}
        </p>
        <div className="journalAuthor">
          <Author
            authorName={authorName}
          />
        </div>
        <FavoriteJournal
          journalId={journalId}
          favorite={favorite}
          favoriteNum={favoriteNum}
          handleFavoriteJournalClick={this.props.handleFavoriteJournalClick}
        />
        <div className="arrowBack">
          {displayArrowBack}
        </div>
        <div className="arrowNext">
          {displayArrowNext}
        </div>
        <div>
          <ul className="touristAttractionList">
            {displayAttractions.map(touristAttraction => (
              <div className="displayTouristAttraction" key={touristAttraction.attractionId}>
                <TouristAttraction
                  journalId={journalId}
                  touristAttraction={touristAttraction}
                  handleFavoriteTouristAttractionClick={this.props.handleFavoriteTouristAttractionClick}
                />
              </div>))}
          </ul>
        </div>
        <div>
          <ul className="hashtagList">
            {hashtags.map(hashtag => (
              <div className="displayTag" key={hashtag.tagId}>
                <Hashtag
                  hashtag={hashtag}
                />
              </div>))}
          </ul>
        </div>
        <div
          className="seeMoreButton"
          onClick={e => this.props.handleSeeMoreClick(e, journalId)}
        >
          <SeeMore />
        </div>
      </div>
    );
  }
}

Journal.propTypes = {
  journal: PropTypes.shape({
    journalId: PropTypes.number.isRequired,
    journalDisplay: PropTypes.bool.isRequired,
    favorite: PropTypes.bool.isRequired,
    favoriteNum: PropTypes.number.isRequired,
    authorName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    touristAttractions: PropTypes.array.isRequired,
    hashtags: PropTypes.array.isRequired,
    display: PropTypes.shape({
      left: PropTypes.bool.isRequired,
      right: PropTypes.bool.isRequired,
      firstDisplay: PropTypes.number.isRequired,
    }),
  }).isRequired,
  handleFavoriteJournalClick: PropTypes.func.isRequired,
  handleAttractionDisplayChange: PropTypes.func.isRequired,
  handleFavoriteTouristAttractionClick: PropTypes.func.isRequired,
  handleSeeMoreClick: PropTypes.func.isRequired,
};

export default Journal;
