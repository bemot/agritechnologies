import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUnits, deleteUnit } from "../../../actions/units";

class UnitList extends Component {
  componentDidMount() {
    this.props.getUnits();
  }

  render() {
    return (
      <div className="ui relaxed divided list" style={{ marginTop: "2rem" }}>
        {this.props.units.map((unit) => (
          <div className="item" key={unit.id}>
            <div className="right floated content">
              <Link
                to={`/units/delete/${unit.id}`}
                className="small ui negative basic button"
              >
                Delete
              </Link>
            </div>
            <i className="large calendar outline middle aligned icon" />
            <div className="content">
              <Link to={`/units/edit/${unit.id}`} className="header">
                {unit.title}
              </Link>
              <div className="Value">{unit.value}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  units: Object.values(state.units),
});

export default connect(mapStateToProps, { getUnits, deleteUnit })(UnitList);
