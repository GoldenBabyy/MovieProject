import React from "react";
import { connect } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
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
