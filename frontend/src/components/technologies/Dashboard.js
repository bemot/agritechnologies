import React, { Component } from "react";
import OperationCreate from "./OperationCreate";
import OperationList from "./OperationList";

class Dashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <OperationCreate />
        <OperationList />
      </div>
    );
  }
}

export default Dashboard;
