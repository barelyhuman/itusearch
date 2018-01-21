import React, { Component } from "react";
import { render } from "react-dom";

import Login from "./views/Login";
import App from "./App";
import OverlayLoader from "./components/OverlayLoader";

class Index extends Component {
  state = {
    loading: true,
    loggedIn: false,
    user: {}
  };

  componentDidMount() {
    document.addEventListener("FBObjectReady", this.initializeFacebookLogin);
  }

  componentWillUnmount() {
    document.removeEventListener("FBObjectReady", this.initializeFacebookLogin);
  }

  initializeFacebookLogin = () => {
    this.FB = window.FB;
    this.checkLoginStatus();
  };

  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.facebookLoginHandler);
  };

  facebookLogin = () => {
    if (!this.FB) return;

    this.FB.getLoginStatus(response => {
      if (response.status === "connected") {
        this.facebookLoginHandler(response);
      } else {
        this.FB.login(this.facebookLoginHandler, { scope: "public_profile" });
      }
    });
  };

  handleLogOut = () => {
    this.setState({
      loading: false,
      loggedIn: false,
      user: {}
    });
  };

  facebookLoginHandler = response => {
    if (response.status === "connected") {
      this.FB.api("/me", userData => {
        let result = {
          ...response,
          user: userData
        };
        this.setState({
          loading: false,
          loggedIn: true,
          user: result.user
        });
      });
    } else {
      this.setState({
        loading: false,
        loggedIn: false,
        user: {}
      });
    }
  };

  render() {
    const { loading, loggedIn, user } = this.state;
    const View = () =>
      !loggedIn ? (
        <Login onLoginClick={this.facebookLogin} />
      ) : (
        <App user={user} logOut={this.handleLogOut} />
      );
    return !loading ? <View /> : <OverlayLoader />;
  }
}

render(<Index />, document.querySelector("#root"));
