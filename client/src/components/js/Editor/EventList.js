import React from 'react';
import PropTypes from 'prop-types';
import EventItem from './EventItem';
import '../../css/Editor/EventList.css'

const EventList = (props) => {
  const { events } = props;
  return (
    <div className="eventList">
      <EventItem
        id={1}
        time="08:00"
        place="日月潭"
      />
      <EventItem
        id={2}
        time="12:35"
        place="日月潭"
      />
      <EventItem
        id={3}
        time="23:00"
        place="日月潭"
      />
      <EventItem
        id={4}
        time="08:00"
        place="日月潭"
      />
      <EventItem
        id={5}
        time="12:35"
        place="日月潭"
      />
      <EventItem
        id={6}
        time="23:00"
        place="日月潭"
      />
      <EventItem
        id={7}
        time="08:00"
        place="日月潭"
      />
      <EventItem
        id={8}
        time="12:35"
        place="日月潭"
      />
      <EventItem
        id={9}
        time="23:00"
        place="日月潭"
      />
    </div>
  );
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

export default EventList;