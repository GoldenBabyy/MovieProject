import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import Route from "./Route.js";
import "../LoginPage/login.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        <div className="center">
          {alert.message && (
            <div
              className={`col-4 center alert ${alert.type}`}
              style={{ textAlign: "center" }}
            >
              {alert.message}
            </div>
          )}
        </div>

        <Route />
        {/* <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
          </Switch>
        </BrowserRouter> */}
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
