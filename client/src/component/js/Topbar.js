import React from 'react';
import PropTypes from 'prop-types';
import ChromeReaderMode from '@material-ui/icons/ChromeReaderMode';
import Create from '@material-ui/icons/Create';
import Subject from '@material-ui/icons/Subject';
import ActionAccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import '../css/Topbar.css';

const styles = {
  AccountCircle: {
    width: 50,
    height: 50,
  },
  ActionCode: {
  	width: 40,
  	height: 40,
  }
};

const Topbar = (props) => {
  const {
    handleMainDisplayChange,
    handleFindJournalClick,
  } = props;

  return (
    <div className="Topbar">
      <div
        className="topbarTitle"
        // onClick={(e) => { handleMainDisplayChange(e, 'home'); }}
      >TRIP PLANNER
      </div>
      <div className="changeMainDisplay">
        <Link to="editor">
        <Create
          className="changeDisplayButton"
          style={styles.ActionCode}
          onClick={() => { handleMainDisplayChange('editor'); }}
        />
        </Link>
        <Link to="editor_reader">
        <ChromeReaderMode
          className="changeDisplayButton"
          style={styles.ActionCode}
          onClick={() => { handleMainDisplayChange('editor_reader'); }}
        />
        </Link>
        <Link to="reader">
        <Subject
          className="changeDisplayButton"
          style={styles.ActionCode}
          onClick={() => { handleMainDisplayChange('reader'); }}
        />
        </Link>
      </div>
      <Link to="/">
      <div
        className="topButton"
        id="homePage"
        onClick={() => { handleMainDisplayChange('home'); }}
      >首頁
      </div>
      </Link>
      <Link to="aboutus">
      <div
        className="topButton"
        id="aboutUs"
        onClick={() => { handleMainDisplayChange('aboutus'); }}
      >關於我們
      </div>
      </Link>
      <div className="topButton" id="expert">達人之旅</div>
      <div
        className="topButton"
        id="findJournel"
        onClick={(e) => { handleFindJournalClick(e); }}
      >遊記參考
      </div>
      <ActionAccountCircle
        className="topButton"
        id="myAccountIcon"
        style={styles.AccountCircle}
      />
    </div>);
};


Topbar.propTypes = {
  handleMainDisplayChange: PropTypes.func.isRequired,
  // handleFindJournalClick: PropTypes.func.isRequired,
};

export default Topbar;
