import React, { Component } from "react";
import TechnologieCreate from "./TechnologieCreate";
import TechnologieList from "./TechnologieList";

class TechnologieDashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <TechnologieCreate />
        <TechnologieList />
      </div>
    );
  }
}

export default TechnologieDashboard;
