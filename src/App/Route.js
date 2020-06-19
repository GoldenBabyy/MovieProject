import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default withRouter(Routes);
