import { combineReducers } from 'redux';
import { tripsReducer } from './Editor/tripsReducer';

export default combineReducers({
  trips: tripsReducer
});