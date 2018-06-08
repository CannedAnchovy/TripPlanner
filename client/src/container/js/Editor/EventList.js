import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventItem from '../../../component/js/Editor/EventItem';
import Add from '@material-ui/icons/Add';
import TooltipIconButton from '../../../component/js/Editor/TooltipIconButton';
import '../../css/Editor/EventList.css';
import { addEvent, deleteEvent } from '../../../actions/Editor/eventAction';
import { connect } from 'react-redux';

const styles = {
  button: {
    width: 55,
    height: 55,
  },
  icon: {
    width: 40,
    height: 40,
  }
}

const mapStateToProps = (state) => ({
  events: (state.editor.trips[state.editor.currentIndex.tripIndex] === undefined)? undefined : state.editor.trips[state.editor.currentIndex.tripIndex].dates[state.editor.currentIndex.dateIndex].events,
  tripIndex: state.editor.currentIndex.tripIndex,
  dateIndex: state.editor.currentIndex.dateIndex
});

const mapDispatchToProps = (dispatch) => ({
  handleAddEvent: (tripIndex, dateIndex) => { dispatch(addEvent(tripIndex, dateIndex)); },
  handleDeleteEvent: (tripIndex, dateIndex, eventIndex) => { dispatch(deleteEvent(tripIndex, dateIndex, eventIndex)); }
});

class EventList extends Component {
  constructor() {
    super();
  }

  render() {
    const { events, tripIndex, dateIndex, handleAddEvent, handleDeleteEvent } = this.props;
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
                disableBar={false}
                handleDeleteEvent={() => {
                  handleDeleteEvent(tripIndex, dateIndex, eventIndex);
                  this.forceUpdate();
                }}
              />
            );})
          }
          <div className="eventItem-container" style={{height: "15%"}}>
            <div className="eventItem" style={{height: "100%"}}>
              <div className="index-circle">
                <TooltipIconButton
                  id='addEventButton'
                  title='新增地點'
                  placement='bottom'
                  style={styles.button}
                  onClick={() => { 
                    handleAddEvent(tripIndex, dateIndex); 
                    this.forceUpdate()
                  }}
                  disabled={false}
                >
                  <Add className="index addIcon" style={styles.icon} />
                </TooltipIconButton>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EventList);