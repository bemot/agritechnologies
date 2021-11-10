import React, { Component } from "react";
import MachineCreate from "./MachineCreate";
import MachineList from "./MachineList"

class MachineDashboard extends Component {

  render() {
    return (
      <div className="ui container">
        <h2 style={{ marginTop: "0.2rem" }}>Машини</h2>

        <MachineCreate />
        <MachineList />
      </div>
    );
  }
}

export default MachineDashboard;
