import React, { Component } from "react";
import { Section } from "../Utils/Utils";
import RegistrationForm from "./RegistrationForm";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <Section className="RegistrationPage">
        <h2>Registration</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    );
  }
}
