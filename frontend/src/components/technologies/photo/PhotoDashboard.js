import React, { Component } from "react";
import PhotoCreate from "./PhotoCreate";
import PhotoList from "./PhotoList";

class PhotoDashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <PhotoCreate />
        <PhotoList />
      </div>
    );
  }
}

export default PhotoDashboard;
