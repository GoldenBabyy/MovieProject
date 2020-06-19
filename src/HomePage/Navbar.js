import React from "react";

import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import logo from "../logo.svg";
import { userActions } from "../_actions";

const Nav = (props) => {
  return (
    <Navbar bg="dark">
      <Navbar.Brand>
        <img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <h4 className="text-white">Movie DB</h4>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="text-white">
          Hi, {props.userName} !{" "}
        </Navbar.Text>
        <Link to="/login" className="m-3 btn btn-danger">
          Logout
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users,
  };
}

const connectedNavbar = connect(mapStateToProps)(Navbar);
export { connectedNavbar as Navbar };

export default Nav;
