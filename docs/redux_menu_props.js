import React, { Component } from "react";
import SidebarItem from "./SidebarItem";
import ActionCreators from "../actions";
import { connect } from "react-redux";

export default class Sidebar extends Component {
  handleClick(index) {
    //Dispatch action here maybe?
    this.props.selectedSidebarItem(index);
    this.selectedSidebarItem = index;
    console.log(this);
  }
  render() {
    var sidebarItemNames = [
      "Verify Original Contract",
      "Evaluate Transfer Terms",
      "Create Future Customer",
      "Check Credit",
      "Generate Agreement",
      "Finalize Transfer",
    ];
    return (
      <div>
        <div id="sidebar-title">
          <div id="sc-logo">LOGO</div>
          <div>Contract Transfer for:</div>
          <div>XYZ</div>
          <br />
        </div>
        <ul className="list-group" id="sidebar-list">
          {sidebarItemNames.map(function (n, index) {
            return (
              <SidebarItem
                key={index}
                index={index}
                selectedIndex={this.selectedSidebarItem}
                name={n}
                handleClick={this.handleClick(index).bind(this)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectedSidebarItem: (index) =>
      dispatch(ActionCreators.setSelectedSidebarItem(index)),
  };
}
const conn = connect(null, mapDispatchToProps)(Sidebar);
