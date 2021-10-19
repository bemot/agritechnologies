import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMachines, deleteMachine } from "../../../actions/machines";
import { getPhotos } from "../../../actions/photos";
import _ from "lodash";

class MachineList extends Component {
  componentDidMount() {
    this.props.getMachines();
    this.props.getPhotos();
  }

  render() {
    const photo = _.filter(this.props.photos, { id: 2 });
    //console.log(photo);
    return (
      <div className="ui relaxed divided list" style={{ marginTop: "2rem" }}>
        {this.props.machines.map((machine) => (
          <div className="item" key={machine.id}>
            <div className="right floated content">
              <Link
                to={`/machines/delete/${machine.id}`}
                className="small ui negative basic button"
              >
                Delete
              </Link>
            </div>
            <i className="large calendar outline middle aligned icon" />
            <div className="content">
              <Link to={`/machines/edit/${machine.id}`} className="header">
                {machine.title}
              </Link>
              <div>
                {photo.map((ph) => (
                  <div>
                    <p key={ph.id}>{ph.image}</p>
                    {ph.admin_thumbnail}
                  </div>
                ))}
              </div>
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
