import React from 'react';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import '../css/Topbar.css';

const styles = {
  AccountCircle: {
    width: 50,
    height: 50,
  },
};

const Topbar = (props) => {
  const {
    handleMainDisplayChange,
  } = props;
  return (
    <div className="Topbar">
      <h2
        className="topbarTitle"
        onClick={(e) => { handleMainDisplayChange(e, 'home'); }}
      >TRIP PLANNER</h2>
      <p 
        className="topButton" 
        id="homePage"
        onClick={(e) => { handleMainDisplayChange(e, 'home'); }}
      >首頁</p>
      <p className="topButton" id="aboutUs">關於我們</p>
      <p className="topButton" id="expert">達人之旅</p>
      <p
        className="topButton"
        id="findJournel"
        onClick={(e) => { handleMainDisplayChange(e, 'editor_reader'); }}
      >遊記參考</p>
      <ActionAccountCircle
        className="topButton"
        id="myAccountIcon"
        style={styles.AccountCircle}
      />
    </div>);
};


export default Topbar;
