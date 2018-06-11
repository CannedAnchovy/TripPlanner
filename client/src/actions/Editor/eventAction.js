export const addEvent = (tripIndex, dateIndex, data) => ({
  type: 'ADD_EVENT',
  tripIndex, 
  dateIndex,
  data
})

export const editEvent = (tripIndex, dateIndex, eventIndex, target, action, data) => ({
  type: 'EDIT_EVENT',
  tripIndex, 
  dateIndex,
  eventIndex,
  target, 
  action,
  data
})

export const deleteEvent = (tripIndex, dateIndex, eventIndex) => ({
  type: 'DELETE_EVENT',
  tripIndex, 
  dateIndex,
  eventIndex
})