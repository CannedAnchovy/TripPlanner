import React, { Component } from 'react';
import Topbar from './Topbar';
import MainDisplay from './MainDisplay';


class TripPlannerApp extends Component {
  constructor() {
    super();
    this.state = {
      display: 'editor_reader',
    };
    this.handleMainDisplayChange = this.handleMainDisplayChange.bind(this);
  }

  handleMainDisplayChange(e, mode){
    this.setState({
      display: mode,
    });
  }

  render() {
    return (
      <div>
        <Topbar
          handleMainDisplayChange={this.handleMainDisplayChange}
        />
        <MainDisplay
          display={this.state.display}
        />
      </div>
    );
  }
}

export default TripPlannerApp;
