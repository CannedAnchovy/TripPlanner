import React from 'react';
import '../css/Topbar.css';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';

const styles = {
  AccountCircle: {
    width: 50,
    height: 50,
  },
}

const Topbar = (props) => {
  return(
    <div className="Topbar">
      <h2 className="topbarTitle">TRIP PLANNER</h2>
      <p className="topButton" id="homePage">首頁</p>
      <p className="topButton" id="aboutUs">關於我們</p>
      <p className="topButton" id="expert">達人之旅</p>
      <p className="topButton" id="findJournel">遊記參考</p>
      <ActionAccountCircle 
        className="topButton"
        id="myAccountIcon"
        style={styles.AccountCircle}
      />
    </div>
  );
}

export default Topbar;