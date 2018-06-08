import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventItem from '../../../component/js/Editor/EventItem';
import '../../css/Editor/EventList.css'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  events: (state.editor.trips[state.editor.currentIndex.tripIndex] === undefined)? undefined : state.editor.trips[state.editor.currentIndex.tripIndex].dates[state.editor.currentIndex.dateIndex].events,
})

class EventList extends Component {
  constructor() {
    super();
  }

  render() {
    const { events } = this.props;
    if(events === undefined)
      return '';
    else {
      return (
        <div className="eventList">
          {events.map((event, eventIndex) => {
            return (
              <EventItem
                key={eventIndex + event.place}
                id={eventIndex+1}
                time={event.time}
                place={event.place}
                notes={event.notes}
                disableBar={eventIndex+1 === events.length}
              />
            );})
          }
        </div>
      );
    }
  }
}
/*
{events.map((event, index) => {
  return (
    <EventItem
      id={index}
      time="08:00"
    />
  );
})}*/

export default connect(mapStateToProps)(EventList);