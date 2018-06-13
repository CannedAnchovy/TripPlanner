export const favoriteListReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_FAVORITE':
      // console.log('in add favorite');
      const newAttraction = {
        place: action.place,
        name: action.name
      }
      return [...state, newAttraction];
    case 'DELETE_FAVORITE':
      // console.log('in delete favorite');
      let newList = [...state];
      let stateTemp = [];
      // console.log(newList);
      for (let i = 0; i < newList.length; i += 1) {
        if(newList[i].name === action.name){
          stateTemp = ([
            ...state.slice(0, i),
            ...state.slice(i+1, newList.length)
          ]);
          // console.log(stateTemp);
          break;
        }
      }
      return stateTemp;
    default:
      return state;
  }
}

export const journalFavoriteListReducer = (state = [], action) => {
  switch(action.type) {
    case 'JOURNAL_FAVORITE_ADD':
      const newJournal = {
        id: action.id,
      }
      return [...state, newJournal];
    case 'JOURNAL_FAVORITE_MINUS':
      let newList = [...state];
      let stateTemp = [];
      for (let i = 0; i < newList.length; i += 1) {
        if(newList[i].id === action.id){
          stateTemp = ([
            ...state.slice(0, i),
            ...state.slice(i+1, newList.length)
          ]);
          break;
        }
      }
      return stateTemp;
    default:
      return state;
  }
}
