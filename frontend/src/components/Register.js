import React from "react";
import axios from "axios";

class Register extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    const { id, value } = e.target;

    this.setState({ [id]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = "http://localhost:5000/api/register";

    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res);
        this.props.history.push("/login");
      })
      .catch(err => {
        console.error("Register Error");
      });
  };

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              id="username"
              onChange={this.handleChange}
              value={this.state.username}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
