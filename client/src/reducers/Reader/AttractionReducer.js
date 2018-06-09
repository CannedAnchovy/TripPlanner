const dataUrl = require('../../component/json/data.json');
const init_attractions = JSON.parse(JSON.stringify(dataUrl)).attractionTable;


export const attractionsReducer = (state = [...init_attractions], action) => {
  const newAttractions = [...state];
  switch(action.type) {
    
    case 'ATTRACTION_FAVORITE_MINUS':
      for( let i = 0; i < newAttractions.length; i += 1) {
        for( let j=0; j < newAttractions[i].popularAttractions.length; j += 1){
          if(newAttractions[i].popularAttractions[j].attractionName === action.name) {
            newAttractions[i].popularAttractions[j].favorite = false;
          }
        }
      }
      return newAttractions;
    case 'ATTRACTION_FAVORITE_ADD':
    // console.log('in attraction favorite add');
    // console.log(newAttractions);
      for( let i = 0; i < newAttractions.length; i += 1) {
        for( let j=0; j < newAttractions[i].popularAttractions.length; j += 1){
          if(newAttractions[i].popularAttractions[j].attractionName === action.name) {
            newAttractions[i].popularAttractions[j].favorite = true;
          }
        }
      }
      return newAttractions;
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
