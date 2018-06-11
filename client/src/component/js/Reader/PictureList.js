import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionAccountCircle from '@material-ui/icons/AccountCircle';
import '../../css/Reader/PictureList.css';

class PictureList extends Component {
  constructor() {
    super();
  }

  render() {
    const place = this.props.place;
    const attractionFocus = this.props.readerDisplayMode.focus;
    let position;
    if(this.props.displayMode === 'editor_reader') {
      position = 'PictureListHalf';
    } else if (this.props.displayMode === 'reader') {
      position = 'PictureListFull';
    }
    const focus = [];
    for (let i = 0; i < place.popularAttractions.length; i += 1) {
      if (i === attractionFocus) {
        focus.push('pictureFocus');
      } else {
        focus.push('pictureNotFocus');
      }
    }
    const imgDisplay = [];
    for (let i = 0; i < 8; i += 1){
      imgDisplay.push(place.popularAttractions[this.props.firstDisplay+i]);
    }
    return (
      <div
        onKeyPress={e => {this.props.handlePopularAttractionDisplayChange(e, 4); }}
      >
        <ul className="PictureList">
            {imgDisplay.map(Attraction => (
              <div className="PictureListDisplay" key={Attraction.attractionId}>
                <img
                  className={focus[Attraction.attractionId]}
                  src={require(`../../img_attraction/img${place.placeId}_${Attraction.attractionId}.jpg`)}
                  width="120"
                  height="90"
                  onClick={e => {this.props.handlePopularAttractionDisplayChange(e, Attraction.attractionId); }}
                />
              </div>))}
          </ul>
      </div>
    );
  }
}

export default PictureList;
