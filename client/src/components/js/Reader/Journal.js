import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ActionDelete from 'material-ui/svg-icons/action/delete';
import ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';
import ImageNavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import { lightGreen300 } from 'material-ui/styles/colors';
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
    color: lightGreen300,
  },
};


class Journal extends Component {
  constructor() {
    super();
  }

  render() {
    // const { items: displayItem, listId, listName } = this.props.list;
    const {
      journalId,
      journalDisplay,
      favorite,
      favoriteNum,
      authorName,
      title,
      touristAttractions,
      hashtags,
    } = this.props.journal;
    return (
      <div className="Journal">
        <p className="journalTitle">
          {title}
        </p>
        <Author
          authorName={authorName}
        />
        <FavoriteJournal
          favorite={favorite}
          favoriteNum={favoriteNum}
        />
        <div className="arrowBack">
          <ImageNavigateBefore
            style={styles.arrowStyle}
          />
        </div>
        <div className="arrowNext">
          <ImageNavigateNext
            style={styles.arrowStyle}
          />
        </div>
        <div>
          <ul className="touristAttractionList">
            {touristAttractions.map(touristAttraction => (
              <div className="displayTouristAttraction" key={touristAttraction.attractionId}>
                <TouristAttraction
                  journalId={journalId}
                  touristAttraction={touristAttraction}
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
};

export default Journal;
