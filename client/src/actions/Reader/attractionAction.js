const dataUrl = require('../../component/json/data.json');
const init_attractions = JSON.parse(JSON.stringify(dataUrl)).attractionTable;

export const initAttractions = () => ({
  type: 'INIT_ATTRACTIONS',
  attractions: init_attractions ,
});

export const attractionFavoriteAdd = (name) => ({
  type: 'ATTRACTION_FAVORITE_ADD',
  name: name,
});

export const attractionFavoriteMinus = (name) => ({
  type: 'ATTRACTION_FAVORITE_MINUS',
  name: name,
});

export const changeFirstListDisplay = (id) => ({
	type: 'CHANGE_FIRSTLIST_DISPLAY',
	id: id,
});