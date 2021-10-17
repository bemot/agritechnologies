import React, { Component } from "react";
import UnitCreate from "./UnitCreate";
import UnitList from "./UnitList";

class UnitDashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <UnitCreate />
        <UnitList />
      </div>
    );
  }
}

export default UnitDashboard;
