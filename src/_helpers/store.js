import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

import { authentication } from "../_reducers/authentication.reducer";
import { registration } from "../_reducers/registration.reducer";
import { users } from "../_reducers/users.reducer";
import { alert } from "../_reducers/alert.reducer";
import { movieReducer } from "../_reducers/movie.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  movieReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
