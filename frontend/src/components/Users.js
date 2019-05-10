import React from "react";
import axios from "axios";
import requireAuth from "./requireAuth";

class Users extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    const endpoint = "http://localhost:5000/api/users";
    const token = localStorage.getItem("token");
    const requestConfig = {
      headers: {
        authorization: token
      }
    };
    axios
      .get(endpoint, requestConfig)
      .then(res => {
        console.log(res);
        this.setState({ users: res.data.user });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Our Users</h2>

        {this.state.users.map(u => (
          <li key={u.id}>{u.username}</li>
        ))}
      </div>
    );
  }
}

export default requireAuth(Users);
