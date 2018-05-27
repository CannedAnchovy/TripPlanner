/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
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
