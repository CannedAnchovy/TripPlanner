import React from 'react';
import ControlTopBar from '../../../container/js/Editor/ControlTopBar';
import EventList from '../../../container/js/Editor/EventList';
import ControlBottomBar from '../../../container/js/Editor/ControlBottomBar';
import '../../css/Editor/JournalEditorHalf.css';

const JournalEditorHalf = () => {
  return (
    <div className="JournalEditorHalf">
      <ControlTopBar />
      <EventList />
      <ControlBottomBar />
    </div>
  );
}

export default JournalEditorHalf;