import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPowerunits, deletePowerunit } from "../../../actions/powerunits";
import { getPhotos } from "../../../actions/photos";
import _ from "lodash";
import ReactHtmlParser from "react-html-parser";

class PowerunitList extends Component {
  getData() {
    setTimeout(() => {
      this.props.getPhotos();
      this.props.getPowerunits();
    }, 10);
  }
  componentDidMount() {
    this.getData();
  }

  TakenPicture = ({ picture_id }) => {
    var pic = [];
    var picobj = {};
    //console.log(picture_id);
    //console.log(this.props.photos);
    pic = _.filter(this.props.photos, { id: picture_id });

    picobj = pic[0];
    //console.log(picobj["admin_thumbnail"]);

    return <div> {ReactHtmlParser(picobj["admin_thumbnail"])}</div>;
  };

  render() {
    return (
      <div className="ui relaxed divided list" style={{ marginTop: "1rem" }}>
        {this.props.powerunits.map((powerunit) => (
          <div className="item" key={powerunit.id}>
            <div className="left floated content">
              <this.TakenPicture picture_id={powerunit.image} />
            </div>

            <div className="right floated content">
              <Link
                to={`/powerunits/delete/${powerunit.id}`}
                className="big ui negative basic button"
              >
                Delete
              </Link>
            </div>
            <div className="content">
              <Link to={`/powerunits/edit/${powerunit.id}`} className="header">
                {powerunit.title}
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
  powerunits: Object.values(state.powerunits),
});

export default connect(mapStateToProps, {
  getPhotos,
  getPowerunits,
  deletePowerunit,
})(PowerunitList);

//_.filter(users, { 'age': 36, 'active': true });//var result = _.map(objArray, _.property("foo"));
