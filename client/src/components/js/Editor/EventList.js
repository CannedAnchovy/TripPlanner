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
        place="文章牛肉湯"
        notes={["早上六點就要起床",  "先去火車站接爸媽"]}
      />
      <EventItem
        id={2}
        time="08:30"
        place="安平豆花"
        notes={[]}
      />
      <EventItem
        id={3}
        time="09:00"
        place="安平老街"
        notes={[]}
      />
      <EventItem
        id={4}
        time="11:00"
        place="四草隧道"
        notes={[]}
      />
      <EventItem
        id={5}
        time="14:00"
        place="億載金城"
        notes={[]}
      />
      <EventItem
        id={6}
        time="17:30"
        place="花園夜市"
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