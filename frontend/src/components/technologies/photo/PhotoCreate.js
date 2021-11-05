import React, { Component } from "react";
import { connect } from "react-redux";
import { formValues } from "redux-form";
import { addPhoto } from "../../../actions/photos";
import PhotoForm from "./PhotoForm";

class PhotoCreate extends Component {
  onSubmit = (formValues) => {
    console.log(formValues.title);
    // call add function with data from PhotoForm
    this.props.addPhoto(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: "2rem" }}>
        <PhotoForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { addPhoto })(PhotoCreate);
