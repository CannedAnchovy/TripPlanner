import React, { Component } from 'react';
// import ActionDelete from 'material-ui/svg-icons/action/delete';
import ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';
import ImageNavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import FavoriteJournal from './FavoriteJournal';
import Author from './Author';
import Hashtag from './Hashtag';
import SeeMore from './SeeMore';
import TouristAttraction from './TouristAttraction';
import { lightGreen300 } from 'material-ui/styles/colors';

import '../../css/Reader/Journal.css';

const styles = {
  arrowStyle:{
    width: 70,
    height: 70,
    color: lightGreen300,
  },
};


class Journal extends Component {
  constructor() {
    super();
    /*
    this.state = {
      journalDisplay: true,
      favorite: true,
      favoriteNum: 10,
      authorName: '台北小吃貨',
      title: '台南美食之旅',
      touristAttractions: [],
      hashtags: [],
    };
    */
  }
  

  render() {
    const journal = this.props.journal;
    return (
      <div className="Journal">
        <p className="journalTitle">
          {journal.title}
        </p>
        <Author
          authorName={journal.authorName}
        />
        <FavoriteJournal
          favorite={journal.favorite}
          favoriteNum={journal.favoriteNum}
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
            {journal.touristAttractions.map((touristAttraction)=> (
              <div className="displayTouristAttraction" key={touristAttraction.attractionId}>
                <TouristAttraction
                  journalId={journal.journalId}
                  touristAttraction={touristAttraction}
                />
              </div>))}
          </ul>
        </div>
        <div>
          <ul className="hashtagList">
            {journal.hashtags.map(hashtag => (
              <div className="displayTag" key={hashtag.tagId}>
                <Hashtag
                  hashtag={hashtag}
                />
              </div>))}
          </ul>
        </div>
        <div className="seeMoreButton">
          <SeeMore/>
        </div>
      </div>
    );
  }
}

export default Journal;
