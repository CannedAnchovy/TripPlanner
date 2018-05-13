import React, { Component } from 'react';
import Topbar from './Topbar';
import MainDisplay from './MainDisplay';


class TripPlannerApp extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Topbar />
        <MainDisplay />
      </div>
    );
  }
}

export default TripPlannerApp;
