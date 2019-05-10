import React from "react";
import axios from "axios";

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem("token");
      const notLoggedIn = <h3>Please Login</h3>;
      return <> {token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
