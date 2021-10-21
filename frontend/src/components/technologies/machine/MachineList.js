import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMachines, deleteMachine } from "../../../actions/machines";
import { getPhotos } from "../../../actions/photos";
import _ from "lodash";
import ReactHtmlParser from "react-html-parser";

class MachineList extends Component {
  componentDidMount() {
    this.props.getMachines();
    this.props.getPhotos();
  }

  pic = [];
  picobj = {};
  TakenPicture = ({ picture_id }) => {
    //console.log(picture_id);
    //console.log(this.props.photos);
    this.pic = _.filter(this.props.photos, { id: picture_id });
    this.picobj = this.pic[0];
    //console.log(this.picobj["admin_thumbnail"]);

    return <div> {ReactHtmlParser(this.picobj["admin_thumbnail"])}</div>;
  };

  render() {
    return (
      <div className="ui relaxed divided list" style={{ marginTop: "2rem" }}>
        {this.props.machines.map((machine) => (
          <div className="item" key={machine.id}>
            <div className="left floated content">
              <this.TakenPicture picture_id={machine.image} />
            </div>

            <div className="right floated content">
              <Link
                to={`/machines/delete/${machine.id}`}
                className="big ui negative basic button"
              >
                Delete
              </Link>
            </div>
            <div className="content">
              <Link to={`/machines/edit/${machine.id}`} className="header">
                {machine.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  machines: Object.values(state.machines),
  photos: Object.values(state.photos),
});

export default connect(mapStateToProps, {
  getMachines,
  deleteMachine,
  getPhotos,
})(MachineList);

//_.filter(users, { 'age': 36, 'active': true });//var result = _.map(objArray, _.property("foo"));
