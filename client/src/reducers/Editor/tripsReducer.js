export const tripsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TRIP':
      const newTrip = {
        name: action.tripName,
        dates: new Array(action.tripDates.length)
      }
      return [...state, newTrip];
    default:
      return state;
  }
}