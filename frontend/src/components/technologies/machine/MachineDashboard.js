import React, { Component } from "react";
import MachineCreate from "./MachineCreate";
import MachineList from "./MachineList";

class MachineDashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <MachineCreate />
        <MachineList />
      </div>
    );
  }
}

export default MachineDashboard;
