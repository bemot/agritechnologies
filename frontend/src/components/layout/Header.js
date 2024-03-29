import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <Menu inverted stackable>
        <Menu.Item>
          <img src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        <Menu.Item name="Технології" href="/technologies" />
        <Menu.Item name="Операції" href="/operations" />

        <Dropdown item text="Змінні">
          <Dropdown.Menu>
            <Dropdown.Item text="Одиниці виміру" href="/units" />
            <Dropdown.Item text="Змінні" href="/variables" />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text="Техніка">
          <Dropdown.Menu>
            <Dropdown.Item text="Енергозасоби" href="/powerunits" />
            <Dropdown.Item text="Машини" href="/machines" />
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item name="Photos" href="/photos" />

        <Menu.Item name="Photos2" href="/simplephoto" />

        <Dropdown item text="Звіти">
          <Dropdown.Menu>
            <Dropdown.Item
              text="Звіт - Список технологій"
              href="/reports/techs-report"
            />
            <Dropdown.Item
              text="Звіт - список операцій"
              href="/reports/opers-report"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    );
  }
}

export default Header;
