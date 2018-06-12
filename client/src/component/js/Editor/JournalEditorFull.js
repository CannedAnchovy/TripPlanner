import React from 'react';
import JournalEditorTitle from './JournalEditorTitle';
import ImgList from './ImgList';
import JournalEventList from '../../../container/js/Editor/JournalEventList';
import '../../css/Editor/JournalEditorFull.css';

const JournalEditorFull = () => {
  return (
    <div className="journalEditorFull-container">
      <div className="journalEditorFull">
        <JournalEditorTitle />
        <ImgList journalIndex={0} length={6}/>
        <JournalEventList />
      </div>
    </div>
  )
}

export default JournalEditorFull;