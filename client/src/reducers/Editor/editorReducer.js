import { getFormateDate } from '../../utility/date';
import { Event, Day, Trip } from '../../utility/editorDataStructure';

function createRandomData() {
  let trips = [];
  for(let i=0; i<=4; ++i) {
    let dates = [];
    let startDate = getFormateDate();
    for(let j=0; j<=i+1; ++j) {
      let events = [];
      for(let k=0; k<=j+1; ++k) {
        events.push(new Event("0"+k+":00", "place-"+j));
      }
      dates.push(new Day(events));
    }
    trips.push(new Trip("trip-"+i, startDate, dates));
  }
  return trips;
}

const initialState = {
  currentIndex: {
    tripIndex: 0,
    dateIndex: 0
  },
  trips: createRandomData()
}

export const editorReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TRIP':
      const newTrip = {
        name: action.tripName,
        startDate: action.tripDate,
        dates: new Array(Number(action.tripDateLength)).fill({events: []})
      };
      return Object.assign({}, state, { trips: [...state.trips, newTrip] });
    case 'EDIT_TRIP':
      return Object.assign({}, state, {
        currentIndex: {
          tripIndex: state.currentIndex.tripIndex,
          dateIndex: 0
        },
        trips: [
          ...state.trips.slice(0, action.index),
          action.editedTrip,
          ...state.trips.slice(action.index+1)
        ] 
      });
    case 'DELETE_TRIP':
      return Object.assign({}, state, {
        currentIndex: {
          tripIndex: 0,
          dateIndex: 0
        },
        trips: [
          ...state.trips.slice(0, action.index),
          ...state.trips.slice(action.index+1)
        ]
      });
    case 'ADD_EVENT':
      let newEvent = { time: '12:00', place: '', notes: []};
      let newTrips = JSON.parse(JSON.stringify(state.trips));
      newTrips[action.tripIndex].dates[action.dateIndex].events.push(newEvent);
      return Object.assign({}, state, {
        trips: newTrips
      })
    case 'EDIT_EVENT':
      newTrips = state.trips;
      if(action.target === 'time' || action.target === 'place') {
        newTrips[action.tripIndex].dates[action.dateIndex].events[action.eventIndex][action.target] = action.data;
      } else if(action.action === 'add') {
        newTrips[action.tripIndex].dates[action.dateIndex].events[action.eventIndex].notes.push(action.data);
      } else {
        newTrips[action.tripIndex].dates[action.dateIndex].events[action.eventIndex].notes.splice(action.noteIndex, 1);
      }
      return Object.assign({}, state, {
        trips: newTrips
      })
    case 'DELETE_EVENT': 
      newTrips = state.trips;
      newTrips[action.tripIndex].dates[action.dateIndex].events.splice(action.eventIndex, 1);
      return Object.assign({}, state, {
        trips: newTrips
      })
    case 'SET_CURRENT_TRIP_INDEX':
      return Object.assign({}, state, {
        currentIndex: { 
          tripIndex: action.tripIndex,
          dateIndex: 0
        }
      });
    case 'SET_CURRENT_DATE_INDEX':
      return Object.assign({}, state, {
        currentIndex: { 
          tripIndex: state.currentIndex.tripIndex,
          dateIndex: action.dateIndex
        }
      });
    default:
      return state;
  }
}

