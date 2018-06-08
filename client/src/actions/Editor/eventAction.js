export const addEvent = (tripIndex, dateIndex) => ({
  type: 'ADD_EVENT',
  tripIndex, 
  dateIndex
})

export const editEventTime = (tripIndex, dateIndex, eventIndex, time) => ({
  type: 'EDIT_EVENT',
  tripIndex, 
  dateIndex,
  eventIndex,
  time
})

export const editEventPlace = (tripIndex, dateIndex, eventIndex, place) => ({
  type: 'EDIT_EVENT',
  tripIndex, 
  dateIndex,
  eventIndex,
  place
})

export const deleteEvent = (tripIndex, dateIndex, eventIndex) => ({
  type: 'DELETE_EVENT',
  tripIndex, 
  dateIndex,
  eventIndex
})