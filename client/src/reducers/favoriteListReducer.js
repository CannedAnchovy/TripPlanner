export const favoriteListReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_FAVORITE':
      console.log('in add favorite');
      const newAttraction = {
        place: action.place,
        name: action.name
      }
      return [...state, newAttraction];
    case 'DELETE_FAVORITE':
      console.log('in delete favorite');
      let newList = [...state];
      let stateTemp = [];
      console.log(newList);
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