import React, { Component } from "react";
import PowerunitCreate from "./PowerunitCreate";
import PowerunitList from "./PowerunitList";

class PowerunitDashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <h2 style={{ marginTop: "0.2rem" }}>Енергозасоби</h2>

        <PowerunitCreate />
        <PowerunitList />
      </div>
    );
  }
}

export default PowerunitDashboard;
