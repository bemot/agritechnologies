import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="ui inverted menu" style={{ borderRadius: "0" }}>
        <a className="header item" href="/">
          Моделювання технологій
        </a>
        <a className="item" href="/technologies">
          Технологійї
        </a>
        <a className="item" href="/operations">
          Операції
        </a>
      </div>
    );
  }
}

export default Header;
