import { movieConstants } from "../_constants";
import { userService } from "../_services";

export const movieActions = {
  favorite,
  unFavorite,
  getFavorite,
};

function getFavorite() {
  return (dispatch) => {
    return dispatch({
      type: movieConstants.FAVORITE,
    });
  };
}

export function favorite(data) {
  console.log("action " + data);
  return (dispatch) => {
    return dispatch({
      type: movieConstants.FAVORITE,
      itemMovie: data,
    });
  };
}

export function unFavorite(id) {
  console.log("unfav " + id);

  return (dispatch) => {
    return dispatch({
      type: movieConstants.UNFAVORITE,
      itemMovie: id,
    });
  };
}
