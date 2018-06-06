export const tripsReducer = (state = [], action) => {
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