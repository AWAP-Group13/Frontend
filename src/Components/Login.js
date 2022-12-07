import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "Success") {
          alert("Successful login");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userInformation";
        }
      });
  }
  render() {
    return (
      <div className="Submain">
        <form onSubmit={this.handleSubmit}>
          <h3>Log In</h3>
          <div className="Submain">
            <div className="signin">
              <label>Email address</label>
              <input
                type="email"
                className="signin"
                placeholder="Enter your email address"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="signin">
              <label>Password</label>
              <input
                type="password"
                className="signin"
                placeholder="Enter your password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
          </div>
          <div className="log">
            <button
              type="submit"
              className="signin"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
