const initialState = {
  favs: [],
  // flagFav: false,
};

export function movieReducer(state = initialState, action) {
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
          // flagFav: true,
        };
      }
    default:
      console.log("tes masuk default");
      return state;
  }
}
