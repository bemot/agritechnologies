import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../layout/Modal";
import history from "../../../history";
import { getUnit, deleteUnit } from "../../../actions/units";

class UnitDelete extends Component {
  componentDidMount() {
    this.props.getUnit(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.unit) {
      return "Are you sure you want to delete this unit, my dear?";
    }
    return `Are you sure you want to delete the unit ( all units will be deleted also!!! ): ${this.props.unit.title}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteUnit(id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/units" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Unit"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  unit: state.units[ownProps.match.params.id],
});

export default connect(mapStateToProps, {
  getUnit,
  deleteUnit,
})(UnitDelete);
