/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TripPlannerApp from './components/js/TripPlannerApp';


const App = () => (
  <MuiThemeProvider>
    <TripPlannerApp />
  </MuiThemeProvider>
);


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
