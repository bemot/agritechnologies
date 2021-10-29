import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPhotos, deletePhoto } from "../../../actions/photos";
import ReactHtmlParser from "react-html-parser";

class PhotoList extends Component {
  getData() {
    setTimeout(() => {
      this.props.getPhotos();
    }, 60);
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="ui relaxed divided list" style={{ marginTop: "2rem" }}>
        {this.props.photos.map((photo) => (
          <div className="item" key={photo.id}>
            <div className="left floated content">
              <div>{ReactHtmlParser(photo.admin_thumbnail)}</div>
            </div>

            <div className="right floated content">
              <Link
                to={`/photos/delete/${photo.id}`}
                className="small ui negative basic button"
              >
                Delete
              </Link>
            </div>
            <div className="content">
              <Link to={`/photos/edit/${photo.id}`} className="header">
                {photo.title}
              </Link>
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
