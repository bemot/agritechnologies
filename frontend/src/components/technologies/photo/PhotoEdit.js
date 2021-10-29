import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhoto, editPhoto } from "../../../actions/photos";
import PhotoForm from "./PhotoForm";

class PhotoEdit extends Component {
  componentDidMount() {
    this.props.getPhoto(this.props.match.params.id);
    //console.log(this.props.getPhoto(this.props.match.params.id));
  }

  onSubmit = (formValues) => {
    this.props.editPhoto(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.photo) {
      return <div>Loading...</div>;
    }
    return (
      <div className="ui container">
        <h2 style={{ marginTop: "2rem" }}>Edit Photo</h2>
        <PhotoForm
          initialValues={_.pick(
            this.props.photo,
            "title" || "",
            "slug" || "",
            "caption" || "",
            "image" || ""
          )}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  photo: state.photos[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getPhoto, editPhoto })(PhotoEdit);
