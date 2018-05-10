import React, { Component } from 'react';
// import TextField from 'material-ui/TextField';
// import '../css/TodoApp.css';
import Topbar from './Topbar';
import MainDisplay from './MainDisplay';


class TripPlannerApp extends Component {
  constructor() {
    super();
  }
  render() {
  	return(
  	  <div>
  	  	<Topbar />
        <MainDisplay />
       </div>
    );
  }
}

export default TripPlannerApp;