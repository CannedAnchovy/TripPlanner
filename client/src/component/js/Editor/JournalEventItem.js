import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../../css/Editor/JournalEventItem.css';

class JournalEventItem extends Component {
  constructor() {
    super();
  }

  render() {
    const { journalIndex, event } = this.props;
    const imgUrl = require(`../../img_journal/img${journalIndex}_${event.index}.jpg`);

    return (
      <div className="journalEventItem-container">
        <div className="journalEventItem">
          <div className="journalEventItem-img-container">
            <img
              className="journalEventItem-img"
              src={imgUrl}
              width="220"
              height="144"
            />
          </div>
          <div className="journalEventItem-title">
            <div className="journalEventItem-name">
              {event.name}
            </div>
            <div className="journalEventItem-rating">
              <Rating 
                editable={false}
                value={event.rating}
                onChange={()=>{}}
              />
            </div>
          </div>
          <div className="journalEventItem-info">
            停留時間：{event.stayTime}分 &nbsp;&nbsp;&nbsp;&nbsp; 平均花費：{event.averageCost}元
          </div>
        </div>
      </div>
    );
  }
}

JournalEventItem.propType = {
  journalIndex: PropTypes.number.isRequired,
  event: PropTypes.object.isRequired,
}

export default JournalEventItem;