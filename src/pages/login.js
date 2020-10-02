import React, { Component } from "react";
import TokenService from "../services/token-service";
import { Button, Input } from "../Utils/Utils";
import AuthApiService from "../services/auth-api-service";

export default class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitBasicAuth = (e) => {
    e.preventDefault();
    const { user_name, password } = e.target;


    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = "";
    password.value = "";
    this.props.onLoginSuccess();
  };

  handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.saveAuthToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="login" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="login__user_name">UserName</label>
          <Input required name="user_name" id="login__username"></Input>
        </div>
        <div className="password">
          <label htmlFor="login__password">Password</label>
          <Input
            required
            name="password"
            type="password"
            id="login__password"
          ></Input>
        </div>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}
