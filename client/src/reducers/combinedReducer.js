import { combineReducers } from 'redux';
import { editorReducer } from './Editor/editorReducer';

export const combinedReducer = combineReducers({
  editor: editorReducer
});