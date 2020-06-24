import { act } from "react-dom/test-utils";

const initialState = {
  favs: [],
};

export function movieReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_FAVORITE":
      let newFavorite = state.favs.concat({
        id: action.payload.data.id,
        overview: action.payload.data.overview,
        title: action.payload.data.title,
        image: action.payload.data.image,
        flagFav: true,
      });

      //cek ada atau ngga
      let favList = state.favs.find(
        (item) => item.id === action.payload.data.id
      );

      if (favList == null) {
        return {
          ...state,
          favs: newFavorite,
        };
      }
    case "REMOVE_FAVORITE":
      const newFav = state.favs.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        favs: newFav,
      };
    default:
      return state;
  }
}
