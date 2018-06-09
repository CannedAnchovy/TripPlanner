import { combineReducers } from 'redux';
import { tripsReducer } from './Editor/tripsReducer';
import { journalsReducer, readingJournalReducer } from './Reader/JournalReducer';
import { attractionsReducer, pictureListReducer } from './Reader/AttractionReducer';
import { displayModeReducer, readerDisplayModeReducer } from './displayModeReducer';

export default combineReducers({
  trips: tripsReducer,
  displayMode: displayModeReducer,
  readerDisplayMode: readerDisplayModeReducer,
  journals: journalsReducer,
  attractions: attractionsReducer,
  firstListDisplay: pictureListReducer,
  readingJournal: readingJournalReducer,
});