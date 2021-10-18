import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMachines, deleteMachine } from "../../../actions/machines";

class MachineList extends Component {
  componentDidMount() {
    this.props.getMachines();
  }

  render() {
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
              <div className="Price">{machine.years}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  machines: Object.values(state.machines),
});

export default connect(mapStateToProps, { getMachines, deleteMachine })(
  MachineList
);
