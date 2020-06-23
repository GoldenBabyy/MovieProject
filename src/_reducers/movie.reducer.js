import { movieConstants } from "../_constants";

const initialState = {
  favs: [],
};

export function movieReducer(state = initialState, action) {
  console.log("AA" + state.favs);
  switch (action.type) {
    case movieConstants.FAVORITE:
      return {
        itemMovie: [...state.favs, action.itemMovie],
      };
    case movieConstants.UNFAVORITE:
      return state.filter((movie) => movie.id !== action.itemMovie);
    default:
      return state;
  }
}
