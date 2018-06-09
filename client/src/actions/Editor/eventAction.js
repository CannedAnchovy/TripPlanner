export const addEvent = (tripIndex, dateIndex) => ({
  type: 'ADD_EVENT',
  tripIndex, 
  dateIndex
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