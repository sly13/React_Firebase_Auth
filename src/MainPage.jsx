import React, { Component } from "react";

class MainPage extends Component {
  render() {
    return (
      <h1> You are: {this.props.isLogin ? "Logged in" : "Not logged in"}</h1>
    );
  }
}

export default MainPage;
