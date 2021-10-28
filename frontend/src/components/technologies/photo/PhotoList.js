import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPhotos, deletePhoto } from "../../../actions/photos";

class PhotoList extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    return (
      <div className="ui relaxed divided list" style={{ marginTop: "2rem" }}>
        {this.props.photos.map((photo) => (
          <div className="item" key={photo.id}>
            <div className="right floated content">
              <Link
                to={`/photos/delete/${photo.id}`}
                className="small ui negative basic button"
              >
                Delete
              </Link>
            </div>
            <i className="large calendar outline middle aligned icon" />
            <div className="content">
              <Link to={`/photos/edit/${photo.id}`} className="header">
                {photo.title}
              </Link>
              <div className="Value">{photo.value}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: Object.values(state.photos),
});

export default connect(mapStateToProps, { getPhotos, deletePhoto })(PhotoList);
