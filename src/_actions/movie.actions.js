export const favoriteMovieAction = (data) => ({
  type: "ADD_FAVORITE",
  payload: {
    data,
  },
});

export const getAllFavorite = () => ({
  type: "GET_FAVORITE",
});

// export function unFavorite(id) {
//   console.log("unfav " + id);

//   return (dispatch) => {
//     return dispatch({
//       type: movieConstants.UNFAVORITE,
//       itemMovie: id,
//     });
//   };
// }
