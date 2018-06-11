const dataUrl = require('../../component/json/data.json');
const init_attractions = JSON.parse(JSON.stringify(dataUrl)).attractionTable;

export const initAttractions = () => ({
  type: 'INIT_ATTRACTIONS',
  attractions: init_attractions ,
});

export const changeFirstListDisplay = (id) => ({
	type: 'CHANGE_FIRSTLIST_DISPLAY',
	id: id,
});