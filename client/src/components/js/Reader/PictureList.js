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
    let position;
    if(this.props.displayMode === 'editor_reader') {
      position = 'PictureListHalf';
    } else if (this.props.displayMode === 'reader') {
      position = 'PictureListFull';
    }
    const focus = [];
    for (let i = 0; i < place.popularAttractions.length; i += 1) {
      if (i === this.props.focus) {
        focus.push('pictureFocus');
      } else {
        focus.push('pictureNotFocus');
      }
    }
    console.log(focus);
    return (
      <div>
        <ul className="PictureList">
            {place.popularAttractions.map(Attraction => (
              <div className="PictureListDisplay" key={Attraction.attractionId}>
                <img
                  className={focus[Attraction.attractionId]}
                  src={require(`../../img_attraction/img${place.placeId}_${Attraction.attractionId}.jpg`)}
                  width="120"
                  height="90"
                />
              </div>))}
          </ul>
      </div>
    );
  }
}

export default PictureList;
