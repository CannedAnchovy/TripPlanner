import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import ActionDelete from 'material-ui/svg-icons/action/delete';
import ImageNavigateNext from '@material-ui/icons/NavigateNext';
import ImageNavigateBefore from '@material-ui/icons/NavigateBefore';
import lightGreen from '@material-ui/core/colors/lightGreen';
import grey from '@material-ui/core/colors/grey';
import FavoriteJournal from './FavoriteJournal';
import Author from './Author';
import Hashtag from './Hashtag';
import SeeMore from './SeeMore';
import TouristAttractionContainer from '../../../container/js/Reader/TouristAttractionContainer';
import FavoriteJournalContainer from '../../../container/js/Reader/FavoriteJournalContainer';
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
          onClick={e => this.props.changeJournalsDisplay(journalId, 'left', displayAttractionNum)}
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
          onClick={e => this.props.changeJournalsDisplay(journalId, 'right', displayAttractionNum)}
        />);
    } else {
      displayArrowNext =
        (<ImageNavigateNext
          style={styles.donothingArrowStyle}
        />);
    }
    console.log(favorite);
    return (
      <div className="Journal">
        <p className="journalTitle">
          {title}
        </p>
        <div
          className="journalAuthor"
          onClick={e => this.props.handleAuthorClick(authorName)}
        >
          <Author
            authorName={authorName}
          />
        </div>
        <FavoriteJournalContainer
          journalId={journalId}
          favorite={favorite}
          favoriteNum={favoriteNum}
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
                <TouristAttractionContainer
                  journalId={journalId}
                  touristAttraction={touristAttraction}
                  // handleFavoriteTouristAttractionClick={this.props.handleFavoriteTouristAttractionClick}
                />
              </div>))}
          </ul>
        </div>
        <div>
          <ul className="hashtagList">
            {hashtags.map(hashtag => (
                <div
                  className="displayTag"
                  key={hashtag.tagId}
                  onClick={e => {this.props.handleHashtagClick(hashtag.tagName);}}
                >
                  <Hashtag
                    hashtag={hashtag}
                  />
                </div>
              ))}
          </ul>
        </div>
        <div
          className="seeMoreButton"
          onClick={e => this.props.changeReaderDisplay('journal', journalId, 0)}
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
