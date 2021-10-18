import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../layout/Modal";
import history from "../../../history";
import { getMachine, deleteMachine } from "../../../actions/machines";

class MachineDelete extends Component {
  componentDidMount() {
    this.props.getMachine(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.machine) {
      return "Are you sure you want to delete this machine, my dear?";
    }
    return `Are you sure you want to delete the machine ( all machines will be deleted also!!! ): ${this.props.machine.title}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteMachine(id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/machines" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Machine"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  machine: state.machines[ownProps.match.params.id],
});

export default connect(mapStateToProps, {
  getMachine,
  deleteMachine,
})(MachineDelete);
