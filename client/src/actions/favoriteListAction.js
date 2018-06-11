export const addFavorite = (place, name) => ({
  type: 'ADD_FAVORITE',
  place:  place,
  name: name,
});

export const deleteFavorite = (name) => ({
  type: 'DELETE_FAVORITE',
  name: name,
});
