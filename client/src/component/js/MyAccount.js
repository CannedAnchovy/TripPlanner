import React from 'react';
import PropTypes from 'prop-types';
// import ChromeReaderMode from '@material-ui/icons/ChromeReaderMode';
// import Create from '@material-ui/icons/Create';
// import Subject from '@material-ui/icons/Subject';
// import ActionAccountCircle from '@material-ui/icons/AccountCircle';
import '../css/MyAccount.css';
import ActionAccountCircle from '@material-ui/icons/AccountCircle';
//import TeamMember from './TeamMember';



const MyAccount = (props) => {
  // \console.log('hi~~~~~~~~~~~~~~');
  return (
    <div className="MyAccount">
      <div className="myInformation">
        <div className="MyHeadFile">
          <ActionAccountCircle
            style={{
              fontSize: "1500%",
              color: "#757575",
              padding: ""
          }}
          />
        </div>
      </div>
      <div className="verticalLine" />
      <div className="myStorage">
      </div>      
    </div>);
};


export default MyAccount;