import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../layout/Modal";
import history from "../../../history";
import { getPhoto, deletePhoto } from "../../../actions/photos";

class PhotoDelete extends Component {
  componentDidMount() {
    this.props.getPhoto(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.photo) {
      return "Are you sure you want to delete this photo, my dear?";
    }
    return `Are you sure you want to delete the photo ( all photos will be deleted also!!! ): ${this.props.photo.title}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deletePhoto(id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/photos" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Photo"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  photo: state.photos[ownProps.match.params.id],
});

export default connect(mapStateToProps, {
  getPhoto,
  deletePhoto,
})(PhotoDelete);
