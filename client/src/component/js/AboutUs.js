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
          這一夜，我享受著雨聲，我等不及閱讀 關於我和你的故事，剛才真心的，替你許了願，
          唱著Falling Slowly走出電影院 ，我睡不著果然是懲罰，我騎著車，風順著吹著，右邊是田，
          想像的你在左邊，等待似乎，變成催促著睡眠，我會不會又睡到下午了！
          <br /><br />
          愛上你的日子總是過得特別快，心跳加速從來也不會變緩慢，時間就停止現在，
          我不要再說晚安，妳還記得 那天下雨下得多浪漫，陪妳逛街怎麼逛腳都不會痠，
          踩著妳腳印沙灘，生日號碼的航班，什麼都願意為妳，為妳為妳為妳而，
          放下恐懼，直到失去力氣，直到我有了妳，我不寂寞孤寂，需要妳的聲音，
          需要妳的呼吸，我只想，像化學反應一樣慢慢的散播在我的心裡，
          你就像迷宮一樣讓我鑽進鑽出卻很開心，你的唇印，你的神情，
          我想帶妳，一起旅行，喜歡你明明生氣卻假裝絲毫都不會在意，
          喜歡和妳從晚上月亮聊到太陽全都升起，慢慢靠近妳，偷偷想起妳，
          說到現在妳是不是有點動心！
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
        <div className="thanksPerson" id="mentor">
          <p className="thanksPersonTitle">指導業師</p>
          <p className="thanksPersonName">翁必揚 業師</p>
        </div>
      </div>
      <div className="aboutUsBottomBar">
        <p>© 2018 by 新手碼農 with create React app</p>
      </div>
    </div>);
    

};


export default AboutUs;