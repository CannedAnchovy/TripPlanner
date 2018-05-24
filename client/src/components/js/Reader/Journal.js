import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ActionDelete from 'material-ui/svg-icons/action/delete';
import ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';
import ImageNavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import { lightGreen700, grey700 } from 'material-ui/styles/colors';
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
    color: lightGreen700,
  },
  donothingArrowStyle: {
    width: 70,
    height: 70,
    color: grey700,
  }
};


class Journal extends Component {
  constructor() {
    super();
    this.state = {
      display: {
        left: false,
        right: true,
        firstDisplay: 0,
      }
    }

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

    let displayAttractions = [];
    // console.log(display.firstDisplay);
    for (let i = 0; i < 5; i += 1){
      displayAttractions.push(touristAttractions[display.firstDisplay + i]);
    }
    let displayArrowBack, displayArrowNext;
    if(display.left){
      displayArrowBack =
        (<ImageNavigateBefore
          style={styles.arrowStyle}
          onClick={(e)=>this.props.handleAttractionDispalyChange(e, journalId, 'left')}
        />)
    } else {
      displayArrowBack =
        (<ImageNavigateBefore
          style={styles.donothingArrowStyle}
        />)
    }
    if(display.right){
      displayArrowNext =
        (<ImageNavigateNext
          style={styles.arrowStyle}
          onClick={(e)=>this.props.handleAttractionDispalyChange(e, journalId, 'right')}
        />)
    } else {
      displayArrowNext =
        (<ImageNavigateNext
          style={styles.donothingArrowStyle}
        />)
    }
    // console.log(displayAttractions);
    return (
      <div className="Journal">
        <p className="journalTitle">
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
                  handleFavoriteTouristAttractionClick = {this.props.handleFavoriteTouristAttractionClick}
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
        <div className="seeMoreButton">
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
  }).isRequired,
  handleFavoriteJournalClick: PropTypes.func.isRequired,
};

export default Journal;
