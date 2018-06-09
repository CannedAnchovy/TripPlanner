export const addTrip = (tripName, tripDate, tripDateLength) => ({
  type: 'ADD_TRIP',
  tripName,
  tripDate,
  tripDateLength 
})

export const editTrip = (index, editedTrip) => ({
  type: 'EDIT_TRIP', 
  index, 
  editedTrip
})

export const deleteTrip = (index) => ({
  type: 'DELETE_TRIP',
  index
})
