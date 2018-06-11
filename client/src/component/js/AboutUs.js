import React from 'react';
import PropTypes from 'prop-types';
// import ChromeReaderMode from '@material-ui/icons/ChromeReaderMode';
// import Create from '@material-ui/icons/Create';
// import Subject from '@material-ui/icons/Subject';
// import ActionAccountCircle from '@material-ui/icons/AccountCircle';
import '../css/AboutUs.css';
import TeamMember from './TeamMember';



const AboutUs = (props) => {
  // console.log('hi~~~~~~~~~~~~~~');
  const teamMembersUrl = require('../json/teamMembers.json');
  const teamMembers = JSON.parse(JSON.stringify(teamMembersUrl)).teamMembers;
  return (
    <div className="AboutUs">
      <div className="aboutUsTitle">
        <p className="productName">TRIP PLANNER</p>
        <p className="aboutUsTop">ABOUT US</p>
      </div>
      <div className="coreValue">
        <p className="aboutUsSubtitle">核心價值</p>
        <div className="coreValueContent">
          我們是一群愛好旅遊的大學生，雖然現在的旅遊工具各式各樣，但是在旅行安排的過程中，
          仍經常遇到種種麻煩，我們希望能歸納出自由行旅行者尚未被解決的痛點，並找到相應的解決方式。
          <br /><br />
          「別讓規畫行程壞了旅遊的興致。」
          <br /><br />
          我們希望結合「行程編輯器」與「遊記查詢與瀏覽」在同一個介面，達到跨平台整合，並提供簡易的
          遊記撰寫模板，提升遊記介面的易讀性，使用者也能更容易搜尋到與自己偏好相符的遊記。
          <br /><br />
          在我們的網站上，使用者除了可以蒐尋遊記，也可以即時複製遊記裡的行程，直接編輯到自己的行程當中。
          在使用者的旅行結束後，我們會提供簡易的遊記撰寫模板與誘因，吸引更多使用者編輯並分享自己的遊記。

        </div>
      </div>
      <div className="slogan">
        <p>想念是會呼吸的痛，</p>
        <p>我是會呼吸的肉。</p>
        <p>就算只想當一塊會呼吸的肉，</p>
        <p>也要出門走走！</p>
      </div>
      <div className="teamMembers">
        <p className="aboutUsSubtitle">團隊成員</p>
        <ul className="memberList">
          {teamMembers.map(teamMember => (
            <div className="memberDisplay" key={teamMember.memberId}>
              <TeamMember
                teamMember={teamMember}
              />
            </div>))}
        </ul>
      </div>
      <div className="specialThanks">
        <p className="aboutUsSubtitle">特別感謝</p>
        <div className="thanksPerson" id="professor">
          <p className="thanksPersonTitle">專題教授</p>
          <p className="thanksPersonName">郭瑞祥 教授</p>
        </div>
        <div className="thanksPerson" id="interviewPeople">
          <p className="thanksPersonName" id="interviewPeopleName">接受訪談的<br />各路親朋好友陌生人</p>
        </div>
        <div className="thanksPerson" id="mentor">
          <p className="thanksPersonTitle">指導業師</p>
          <p className="thanksPersonName">翁必揚 業師</p>
        </div>
      </div>
      <div className="aboutUsBottomBar">
        <p>© 2018 by 新手碼農與她的崩潰夥伴 with create React app</p>
      </div>
    </div>);
    

};


export default AboutUs;