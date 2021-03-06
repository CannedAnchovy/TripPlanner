import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleStarBorder from '@material-ui/icons/StarBorder';
import ToggleStar from '@material-ui/icons/Star';
import yellow from '@material-ui/core/colors/yellow';
import ActionAccountCircle from '@material-ui/icons/AccountCircle';
import '../../css/Reader/PopularAttraction.css';
import Comment from './Comment';

const styles = {
  stars: {
    color: yellow[700],
    width: 35,
    height: 35,
  },
};

class PopularAttraction extends Component {
  constructor() {
    super();
  }
  render() {
    const attraction = this.props.place.popularAttractions[this.props.focus.attraction];
    let position;
    if(this.props.displayMode === 'editor_reader') {
      position = 'PictureListHalf';
    } else if (this.props.displayMode === 'reader') {
      position = 'PictureListFull';
    }
    const starsDisplay = [];
    for (let i = 0; i < 5; i += 1) {
      if (i < attraction.stars) {
        starsDisplay.push(<ToggleStar style={styles.stars} />);
      } else {
        starsDisplay.push(<ToggleStarBorder style={styles.stars} />);
      }
    }

    const commentDisplay = [];
    const comments = this.props.comments;
    for (let i = 0; i < comments.length; i += 1) {
      commentDisplay.push(
      <Comment
        authorName={comments[i].authorName}
        content={comments[i].content}
        handleAuthorClick={this.props.handleAuthorClick}
      />);
    }
    return (
      <div className="PopularAttraction">
        <p className="placeName">
          {`${this.props.place.placeName} 大家還去了......`}
        </p>
        <div className="popularAttractionInfo">
          <p className="popularAttractionName">
            {attraction.attractionName}
          </p>
          <div>
            <ul className="attractionStarsDisplay">
              {starsDisplay.map(star => (
                <div className="star">{star}</div>))}
            </ul>
          </div>
          <div className="attractionInfo">
            <p className="attractionInfop">{`停留時間： ${attraction.stayTime} 分`}</p>
            <p className="attractionInfop">{`平均花費： ${attraction.money} 元`}</p>
            <p className="attractionInfop">{`交通方式： ${attraction.transportation}`}</p>
            <p className="attractionInfop">{`營業時間： ${attraction.openTime}`}</p>
            <p className="attractionInfop">{`地址： ${attraction.address}`}</p>
          </div>
        </div>
        <img
          className="mainImage"
          src={require(`../../img_attraction/img${this.props.place.placeId}_${attraction.attractionId}.jpg`)}
          width="720"
          height="540"
        />
        <div>
          <ul className="allComments">
            {commentDisplay.map(comment => (
              <div className="comment">{comment}</div>))}
          </ul>
        </div>
      </div>
      
    );
  }
}

export default PopularAttraction;
