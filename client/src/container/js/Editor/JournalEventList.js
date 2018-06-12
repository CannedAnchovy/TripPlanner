import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JournalEventItem from '../../../component/js/Editor/JournalEventItem';
import TextField from '@material-ui/core/TextField';
import '../../css/Editor/JournalEventList.css';

const events = [{
    index: 0,
    name: '文章牛肉湯',
    rating: 3,
    stayTime: 40,
    averageCost: 100,
  }, 
  {
    index: 1,
    name: '泰成水果冰',
    rating: 4,
    stayTime: 40,
    averageCost: 50,
  }, 
  {
    index: 2,
    name: '安平豆花',
    rating: 4.5,
    stayTime: 20,
    averageCost: 45,
  }, 
  {
    index: 3,
    name: '純薏仁',
    rating: 5,
    stayTime: 20,
    averageCost: 50,
  }, 
  {
    index: 4,
    name: '依蕾特布丁',
    rating: 3.5,
    stayTime: 40,
    averageCost: 200,
  }, 
  {
    index: 5,
    name: '鱔魚意麵',
    rating: 2,
    stayTime: 200,
    averageCost: 75,
  }
];

class JournalEventList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="journalEventList-container">
        <div className="journalEventList">
          <div className="journalEventList-left">
            {events.slice(0, 3).map(event => {
              return (
                <JournalEventItem
                  journalIndex={0}
                  event={event}
                />
              );
            })}
          </div>
          <div className="journalEventList-right">
            {events.slice(3).map(event => {
              return (
                <JournalEventItem
                  journalIndex={0}
                  event={event}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default JournalEventList;