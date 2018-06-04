import React from 'react';
import PropTypes from 'prop-types';
// import ChromeReaderMode from '@material-ui/icons/ChromeReaderMode';
// import Create from '@material-ui/icons/Create';
// import Subject from '@material-ui/icons/Subject';
// import ActionAccountCircle from '@material-ui/icons/AccountCircle';
import '../css/TeamMember.css';



const TeamMembers = (props) => {
  const {
    teamMember,
  } = props;
  console.log(teamMember);

  return (
    <div
      className="TeamMembers"
      id={`member_${teamMember.memberId}`}
    >
      <img
        className="memberPicture"
        src={require(`../img/member_${teamMember.memberId}.jpg`)}
        width="45%"
      />
      <p className="memberPosition">{teamMember.position}</p>
      <p className="memberName">{teamMember.name}</p>
      <p className="memberSlogan">{teamMember.slogan}</p>
    </div>);
    

};


export default TeamMembers;
