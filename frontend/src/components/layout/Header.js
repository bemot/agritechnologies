import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";

class Header extends Component {
  state = { activeItem: "technologies" };
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    onWidosykSelect = this.props.onWidosykSelect(name);
  };
  render() {
    const { activeItem } = this.state;
    //console.log(this.myname);
    return (
      <Menu>
        <Menu.Item
          name="technologies"
          active={activeItem === "technologies"}
          onClick={this.handleItemClick}
        >
          Technoloigies
        </Menu.Item>

        <Menu.Item
          name="operations"
          active={activeItem === "operations"}
          onClick={this.handleItemClick}
        >
          Operations
        </Menu.Item>

        <Menu.Item
          name="reports"
          active={activeItem === "reports"}
          onClick={this.handleItemClick}
        >
          Reports
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
//export default connect(null, { state })(Header);
