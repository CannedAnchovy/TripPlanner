import React from 'react';
import ReactDOM from 'react-dom';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducer from './reducers/combinedReducer';
import TripPlannerAppContainer from './container/js/TripPlannerAppContainer';

const store = createStore(combinedReducer);

store.subscribe(() => {
  console.log('current state in store:');
  console.log(store.getState());
  console.log('=============================================');
});

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
});


const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <TripPlannerAppContainer />
    </MuiThemeProvider>
  </Provider>
);


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
