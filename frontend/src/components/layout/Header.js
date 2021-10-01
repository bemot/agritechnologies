import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item href="/">IAE</Menu.Item>
        <Menu.Item name="Технології" href="/technologies" />
        <Menu.Item name="Операції" href="/operations" />
        <Dropdown item text="Техніка">
          <Dropdown.Menu>
            <Dropdown.Item text="Енергозасоби" href="/technics" />
            <Dropdown.Item text="Машини" href="/technics" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    );
  }
}

export default Header;
