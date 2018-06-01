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
        notes={new Array(5).fill("css好難人生好難")}
      />
      <EventItem
        id={2}
        time="12:35"
        place="日月潭"
        notes={[]}
      />
      <EventItem
        id={3}
        time="23:00"
        place="日月潭"
        notes={[]}
        disableBar={false}
      />
      <EventItem
        id={1}
        time="08:00"
        place="日月潭"
        notes={new Array(5).fill("css好難人生好難")}
      />
      <EventItem
        id={2}
        time="12:35"
        place="日月潭"
        notes={[]}
      />
      <EventItem
        id={3}
        time="23:00"
        place="日月潭"
        notes={[]}
        disableBar={true}
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