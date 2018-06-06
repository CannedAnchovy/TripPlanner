export const addTrip = (tripName, tripDate, tripDateLength) => ({
  type: 'ADD_TRIP',
  tripName,
  tripDate,
  tripDateLength 
})

export const editTrip = (index, name, dates) => ({
  type: 'EDIT_TRIP', 
  tripIndex: index,
  tripName: name,
  tripDatesLength: dates
})

export const deleteTrip = (index) => ({
  type: 'DELETE_TRIP',
  tripIndex: index
})
