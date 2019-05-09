import React from "react";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import Login from "./components/Login";
import Users from "./components/Users";

function App(props) {
  function logout() {
    localStorage.removeItem("token");
    props.history.push("/login");
  }
  return (
    <div>
      <h2>User App</h2>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/users">Users</NavLink>
      <button type="button" onClick={logout}>
        Logout
      </button>
      <Route path="/login" component={Login} />
      <Route path="/users" component={Users} />
    </div>
  );
}

export default withRouter(App);
