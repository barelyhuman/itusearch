import React, { Component } from "react";
import Container from "./containers/Container";
import Dashboard from "./containers/Dashboard";
import SideBar from "./containers/SideBar";

class App extends Component {
  state = {
    dashboard: {
      view: "search"
    },
    sidebarItems: [
      {
        view: "search",
        icon: "fa-search"
      },
      {
        view: "logout",
        icon: "fa-sign-out"
      }
    ]
  };

  changeDashboardView = view => {
    this.FB = window.FB;
    if (view === "logout") {
      const a = confirm("are you sure you want to log out?");
      if (a === true) {
        this.FB.logout();
        this.props.logOut();
      } else {
        return;
      }
    } else {
      const n = Object.assign({}, this.state);
      n.dashboard.view = view;
      this.setState(n);
    }
  };

  render() {
    const { dashboard, sidebarItems } = this.state;
    return (
      <Container className="app-container">
        <SideBar
          items={sidebarItems}
          activeView={dashboard.view}
          changeView={this.changeDashboardView}
        />
        <Dashboard currentView={dashboard.view} />
      </Container>
    );
  }
}

export default App;
