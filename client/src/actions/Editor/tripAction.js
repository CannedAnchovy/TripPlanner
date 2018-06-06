export const addTrip = (name, datesLength) => ({
  type: 'ADD_TRIP',
  tripName: name,
  tripDatesLength: datesLength 
})

export const editTrip = (index, name, dates) => ({
  type: 'EDIT_TRIP', 
  tripIndex: index,
  tripName: name,
  tripDatesLength: datesLength
})

export const deleteTrip = (index) => ({
  type: 'DELETE_TRIP',
  tripIndex: index
})
