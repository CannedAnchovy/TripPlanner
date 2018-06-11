const dataUrl = require('../../component/json/data.json');
const init_attractions = JSON.parse(JSON.stringify(dataUrl)).attractionTable;


export const attractionsReducer = (state = [...init_attractions], action) => {
  const newAttractions = [...state];
  switch(action.type) {
    default:
      return state;
  }
}

export const pictureListReducer = (state = 0, action) => {
  switch(action.type) {
    case 'CHANGE_FIRSTLIST_DISPLAY':
      return action.id;
    default:
      return state;
  }
}
