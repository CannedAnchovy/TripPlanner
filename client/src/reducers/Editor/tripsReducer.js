import { getFormateDate } from '../../utility/date';

// create test data
class Event {
  constructor(time, place) {
    this.time = time;
    this.place = place;
    this.notes = [];
  }
}

class Day {
  constructor(events) {
    this.events = events;
  }
}

class Trip {
  constructor(name, startDate, dates) {
    this.name = name;
    this.startDate = startDate
    this.dates = dates;
  }
}

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

export const tripsReducer = (state = createRandomData(), action) => {
  switch(action.type) {
    case 'ADD_TRIP':
      const newTrip = {
        name: action.tripName,
        startDate: action.tripDate,
        dates: new Array(Number(action.tripDateLength))
      }
      return [...state, newTrip];
    default:
      return state;
  }
}

