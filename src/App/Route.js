import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { FavoritePage } from "../FavoritePage";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/favorite" component={FavoritePage} />
      </Switch>
    </BrowserRouter>
  );
};

function mapStateToProps(state) {
  const { users, authentication, movieReducer } = state;
  const { user } = authentication;
  const { favs } = movieReducer;
  return {
    user,
    users,
    favs,
  };
}

const connectedHomePage = connect(mapStateToProps)(Routes);
export { connectedHomePage as Routes };
export default Routes;

// export default withRouter(Routes);
