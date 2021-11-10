import React, { Component } from "react";
import { connect } from "react-redux";
import { formValues } from "redux-form";
import { addPhoto } from "../../../actions/photos";
import PhotoForm from "./PhotoForm";
import axios from "axios";

class PhotoCreate extends Component {

  refreshPage() {
    window.location.reload(false);
  }

  onSubmit = (formValues, image) => {
    //console.log(formValues.title);
    //console.log(formValues.slug);
    //console.log(formValues.caption);
    //console.log(image);

    let formdata = new FormData();

    formdata.append("title", formValues.title);
    formdata.append("slug", formValues.slug);
    formdata.append("caption", formValues.caption);
    formdata.append("image", image);

    axios.post(`http://localhost:8000/api/photos/`, formdata).then((res) => {
      console.log(res);
      console.log(res.data);
      this.refreshPage();
    });
    // call add function with data from PhotoForm
    //this.props.addPhoto(formdata);
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
