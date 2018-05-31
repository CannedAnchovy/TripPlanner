import React, { Component } from 'react';
import ControlTopBar from './Editor/ControlTopBar';
import ControlButtomBar from './Editor/ControlButtomBar';
import '../css/JournalEditor.css';

// create test data
class Event {
  constructor(time, place) {
    this.time = time;
    this.place = place;
    this.notes = [];
  }
}

class Day {
  constructor(events) {
    this.events = events;
  }
}

class Trip {
  constructor(name, dates) {
    this.name = name;
    this.dates = dates;
  }
}

function createRandomData() {
  let trips = [];
  for(let i=0; i<=4; ++i) {
    let dates = [];
    for(let j=0; j<=i+1; ++j) {
      let events = [];
      for(let k=0; k<=j+1; ++k) {
        events.push(new Event("0"+k+":00", "place-"+j));
      }
      dates.push(new Day(events));
    }
    trips.push(new Trip("trip-"+i, dates));
  }
  return trips;
}

class JournalEditor extends Component {
  constructor() {
    super();
    this.state = {
      trips: createRandomData(),
      currentTripIndex: 0,
      currentDateIndex: 0,
    }
    this.handleChangeCurrentIndex = this.handleChangeCurrentIndex.bind(this);
    this.handleModifyData = this.handleModifyData.bind(this);
  }
  
  // handler function for changing current viewing trip/date index
  handleChangeCurrentIndex(kind, index) {
    if(kind === "trip") {
      this.setState({
        currentTripIndex: index,
        currentDateIndex: 0,
      });
    } else if(kind === "date") {
      this.setState({
        currentDateIndex: index
      });
    } else {
      console.error("Invalid JournalEditor index!");
      this.setState({
        currentTripIndex: 0,
        currentDateIndex: 0,
      })
    }
  }
  
  // handler function for modifiing Journey data (add/modify/delete)
  handleModifyData(action, kind, payload) {
    switch(kind) {
      case "trips":
        if(action === "add") {
          const newState = this.state;

          const dates = Array(payload.dateNum).fill(new Day([]));
          const newTrip = new Trip(payload.name, dates);
          newState.push(newTrip);
        }
      case "trips[].name":
      case "trips[].dates":
      case "trips[].dates[].events":
      case "trips[].dates[].events[].time":
      case "trips[].dates[].events[].place":
      case "trips[].dates[].events[].notes":
    }
  }

  render() {
    const displayMode = (this.props.display === "editor_reader")? "JournalEditorHalf" : "JournalEditorFull";

    /*if(this.props.display === "editor_reader") {
      let tripsList = [];
      for(let i=0; i<this.state.data.lenght; ++i) {
        tripsList.push(this.state.data[i].tripName);
      }

      return (
        <div className="JournalEditorHalf">
          <ControlBar
            tripIndex={this.state.tripIndex}
            dateIndex={this.state.dateIndex}
            tripsList={tripsList}
            currentTripDateMax={this.state.data[this.state.tripIndex].schedule.lenght}
          />
        </div>
      );
    } else if(this.props.display === "editor")
      return (
        <div className="JournalEditorFull">
          Full
        </div>
      )*/
    return (
      <div className="JournalEditorHalf">
        <ControlTopBar />
        <ControlButtomBar />
      </div>
    )
  }
}

export default JournalEditor;
