import React from 'react';
import '../../css/Editor/JournalEditorTitle.css';

const JournalEditorTitle = (props) => {
  return (
    <div className="journalEditor-title">
      <div className="joutnalEditor-name">
        台南美食之旅！
      </div>
      <div className="joutnalEditor-rateMax">
        評價最高：&nbsp;&nbsp;&nbsp;&nbsp; 純薏仁
      </div>
      <div className="joutnalEditor-rateMin">
        評價最高：&nbsp;&nbsp;&nbsp;&nbsp; 鱔魚意麵
      </div>
    </div>
  )
}

export default JournalEditorTitle;