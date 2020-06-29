const initialState = {
  favs: [],
  rate: [],
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
        };
      }
    case "REMOVE_FAVORITE":
      const newFav = state.favs.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        favs: newFav,
      };
    case "ADD_RATING":
      console.log(action);
      let newRate = state.rate.concat({
        id: action.payload.id,
        rating: action.payload.rating,
      });

      const rateList = state.rate.find((item) => item.id === action.payload.id);
      if (rateList == null) {
        return {
          ...state,
          rate: newRate,
        };
      } else {
        console.log(action);
        rateList.rating = action.payload.rating;
        return {
          ...state,
          rate: state.rate.map((rate, i) =>
            rate.id === action.payload.id
              ? { ...rate, rating: action.payload.rating }
              : rate
          ),
        };
      }

    default:
      return state;
  }
}
