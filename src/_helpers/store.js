import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../_reducers";

// const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  // applyMiddleware(thunkMiddleware, loggerMiddleware)
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
