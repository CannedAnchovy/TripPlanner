import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentRemove from '@material-ui/icons/Remove';
import lightGreen from '@material-ui/core/colors/lightGreen';
import grey from '@material-ui/core/colors/grey';
import FavoriteJournal from './FavoriteJournal';
import Author from './Author';
import TouristAttractionFull from './TouristAttractionFull';
import Hashtag from './Hashtag';
import Chip from '@material-ui/core/Chip';
import FavoriteJournalContainer from '../../../container/js/Reader/FavoriteJournalContainer';
import TouristAttractionFullContainer from '../../../container/js/Reader/TouristAttractionFullContainer';
import '../../css/Reader/JournalHalf.css';
import '../../css/Reader/Journal.css';
import SelectMenu from '../Editor/SelectMenu';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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
  remove: {
    width: 30,
    height: 30,
  },
};


class JournalHalf extends Component {
  constructor() {
    super();
    this.state ={
      displayDay: 0,
    }
    this.handleDayDisplayChange = this.handleDayDisplayChange.bind(this);
  }

  handleDayDisplayChange(index){
    this.setState({
      displayDay: index,
    });
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
      information,
      releaseDay,
      days,
    } = this.props.journal;
    const re = /\n/g;
    const newInformation = {
      __html:information.replace(re, '<br/>'),
    };
    const menuItems=[]
    for( let i = 1; i <= days; i += 1) {
      menuItems.push(`Day ${i}`);
    }
    const displayAttractions = [];
    for( let i = 0; i < touristAttractions.length; i += 1) {
      console.log(touristAttractions[i]);
      if (touristAttractions[i].day === this.state.displayDay + 1){
        displayAttractions.push(touristAttractions[i]);
      }
    }
    // console.log(displayAttractions);
    return (
      <div className="JournalHalf">
        <p className="journalTitleHalf">
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
        <ContentRemove
          className="backtoJournalList"
          onClick={e => this.props.changeReaderDisplay('list', -1, -1)}
          style={styles.remove}
        />
        <div>
          <ul className="hashtagFullList">
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
          className="releaseDay"
        >
          {`發佈日期：${releaseDay}`}
        </div>
        <div className="information">
          <ExpansionPanel>
            <ExpansionPanelSummary
              style={{ backgroundColor: '#DCEDC8' }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>
                <p className="informationTitle">旅行小記</p>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <div
                  className="informationContent"
                  dangerouslySetInnerHTML={ newInformation }
                />
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div className="journalChooseDay">
          <SelectMenu
            menuItems={menuItems}
            menuWidth={200}
            defaultText="Day 0"
            className="journalDaySelect"
            index={this.state.displayDay}
            onChange={this.handleDayDisplayChange}
          />
        </div>
        <div className="hr" />

        <div className="divtouristAttractionFullList">
          <ul className="touristAttractionFullList">
            {displayAttractions.map(touristAttraction => (
              <div className="displayTouristAttractionFull" key={touristAttraction.attractionId}>
                <TouristAttractionFullContainer
                  journalId={journalId}
                  touristAttraction={touristAttraction}
                  // handleFavoriteTouristAttractionClick={this.props.handleFavoriteTouristAttractionClick}
                  // handleAttractionClick={this.props.handleAttractionClick}
                />
              </div>))}
          </ul>
        </div>
      </div>
    );
  }
}

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
  handleFindJournalClick: PropTypes.func.isRequired,
  handleFavoriteTouristAttractionClick: PropTypes.func.isRequired,
};

export default JournalHalf;
