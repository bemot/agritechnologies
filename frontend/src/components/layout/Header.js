import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <Menu inverted>
        <Menu.Item href="/">IAE</Menu.Item>
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
            <Dropdown.Item text="Енергозасоби" href="/" />
            <Dropdown.Item text="Машини" href="/machines" />
          </Dropdown.Menu>
        </Dropdown>

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
