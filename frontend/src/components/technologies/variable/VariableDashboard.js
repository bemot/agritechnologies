import React, { Component } from "react";
import VariableCreate from "./VariableCreate";
import VariableList from "./VariableList";

class VariableDashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <VariableCreate />
        <VariableList />
      </div>
    );
  }
}

export default VariableDashboard;
