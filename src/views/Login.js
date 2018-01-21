import React, { Component } from "react";
import Container from "../containers/Container";

class Login extends Component {
  render() {
    const { onLoginClick } = this.props;
    return (
      <Container className="fullpage-container">
        <div className="title white">Itunes Search</div>
        <div className="flex flex-just-center flex-align-center">
          <div className="cta-button" onClick={onLoginClick}>
            Login using Facebook
          </div>
        </div>
      </Container>
    );
  }
}

export default Login;
