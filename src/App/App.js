import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store, configureFakeBackend } from "../_helpers";
import Route from "./Route";
import "../LoginPage/login.css";

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  </Provider>
);

export function App() {
  configureFakeBackend();

  return <Root />;
}
