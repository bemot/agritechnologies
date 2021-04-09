import React, { Component } from "react";
import OperationCreate from "./OperationCreate";
import OperationList from "./OperationList";

class OperationDashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <OperationCreate />
        <OperationList />
      </div>
    );
  }
}

export default OperationDashboard;
