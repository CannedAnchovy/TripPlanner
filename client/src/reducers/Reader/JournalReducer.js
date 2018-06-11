const dataUrl = require('../../component/json/data.json');
const init_journals = JSON.parse(JSON.stringify(dataUrl)).journals;

export const journalsReducer = (state = init_journals, action) => {
  let newJournals = [...state];
  switch(action.type) {
    case 'INIT_JOURNALS':
      //console.log('init journals!!!!!!!!!!');
      return action.journals;
    case 'CHANGE_JOURNALS_DISPLAY':
    {
      //console.log('in change journals display!!!!!!!!!!');
      const id = action.id;
      const dir = action.dir;

      let newDisplay = Object.assign({}, newJournals[id].display);
      if(dir === 'left' && newDisplay.left === true) {
        newDisplay.firstDisplay = newDisplay.firstDisplay - 1;
      } else if(dir === 'right' && newDisplay.right === true) {
        newDisplay.firstDisplay = newDisplay.firstDisplay + 1;
      }
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
    default:
      return state;
  }
}

export const readingJournalReducer = (state = -1, action) => {
    //console.log(action);
    //console.log('in reading Journal reducer')
  switch(action.type){
    case 'CHANGE_READING_JOURNAL':
      //console.log('in change reading Journal reducer');
      return action.id;
    default:
      return state;
  }
}