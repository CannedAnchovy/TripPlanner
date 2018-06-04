import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TripPlannerApp from './components/js/TripPlannerApp';

const emptyReducer = (action, state) => {
  return state;
};

const store = createStore(emptyReducer);
const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <TripPlannerApp />
    </MuiThemeProvider>
  </Provider>
);


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
