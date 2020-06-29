export const favoriteMovieAction = (data) => ({
  type: "ADD_FAVORITE",
  payload: {
    data,
  },
});

export const removeFavorite = (data) => ({
  type: "REMOVE_FAVORITE",
  payload: data,
});

export const ratingStarAction = (data) => ({
  type: "ADD_RATING",
  payload: data,
});
