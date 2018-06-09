const dataUrl = require('../../component/json/data.json');
const init_journals = JSON.parse(JSON.stringify(dataUrl)).journals;

export const journalsReducer = (state = init_journals, action) => {
  let newJournals = [...state];
  switch(action.type) {
    case 'INIT_JOURNALS':
      console.log('init journals!!!!!!!!!!');
      return action.journals;
    case 'CHANGE_JOURNALS_DISPLAY':
    {
      console.log('in change journals display!!!!!!!!!!');
      const id = action.id;
      const dir = action.dir;

      let newDisplay = Object.assign({}, newJournals[id].display);
      if(dir === 'left' && newDisplay.left === true) {
        newDisplay.firstDisplay = newDisplay.firstDisplay - 1;
      } else if(dir === 'right' && newDisplay.right === true) {
        newDisplay.firstDisplay = newDisplay.firstDisplay + 1;
      }


      
      // console.log(newDisplay.right);
      console.log(newDisplay);
      newJournals[id].display = newDisplay;
      
      return newJournals;
    }
    case 'JOURNAL_FAVORITE_MINUS':
      newJournals[action.id].favorite = false;
      newJournals[action.id].favoriteNum = newJournals[action.id].favoriteNum - 1;
      return newJournals;
    case 'JOURNAL_FAVORITE_ADD':
      newJournals[action.id].favorite = true;
      newJournals[action.id].favoriteNum = newJournals[action.id].favoriteNum + 1;
      return newJournals;
    case 'ATTRACTION_FAVORITE_MINUS':
      console.log('in journal reducer attraction favorite minus');
      for( let i = 0; i < newJournals.length; i += 1) {
        for( let j=0; j < newJournals[i].touristAttractions.length; j += 1){
          if(newJournals[i].touristAttractions[j].attractionName === action.name) {
            newJournals[i].touristAttractions[j].favoriteAttraction = false;
          }
        }
      }
      return newJournals;
    case 'ATTRACTION_FAVORITE_ADD':
       console.log('in journal reducer attraction favorite add');
      for( let i = 0; i < newJournals.length; i += 1) {
        for( let j=0; j < newJournals[i].touristAttractions.length; j += 1){
          if(newJournals[i].touristAttractions[j].attractionName === action.name) {
            newJournals[i].touristAttractions[j].favoriteAttraction = true;
          }
        }
      }
      return newJournals;
    default:
      return state;
  }
}

export const readingJournalReducer = (state = -1, action) => {
    console.log(action);
    console.log('in reading Journal reducer')
  switch(action.type){
    case 'CHANGE_READING_JOURNAL':
      console.log('in change reading Journal reducer');
      return action.id;
    default:
      return state;
  }
}