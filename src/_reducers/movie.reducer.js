import { movieConstants } from "../_constants";

const initialState = {
  favs: [],
};

export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case movieConstants.FAVORITE:
      return {
        itemMovie: [...state.favs, action.itemMovie],
      };
    case movieConstants.UNFAVORITE:
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
}

// const mapStateToProps = state =>{
//   return
// }

// export default movieReducer;
//
