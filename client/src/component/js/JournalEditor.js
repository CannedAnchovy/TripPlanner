import React, { Component } from 'react';
import ControlTopBar from '../../container/js/Editor/ControlTopBar';
import EventList from '../../container/js/Editor/EventList';
import ControlBottomBar from '../../container/js/Editor/ControlBottomBar';
import '../css/JournalEditor.css';

const JournalEditor = (props) => {
  const displayMode = (props.display === "editor_reader")? "JournalEditorHalf" : "JournalEditorFull";

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
      <EventList />
      <ControlBottomBar />
    </div>
  )
}

export default JournalEditor;
