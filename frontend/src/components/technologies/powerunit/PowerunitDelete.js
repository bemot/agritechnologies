import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../layout/Modal";
import history from "../../../history";
import { getPowerunit, deletePowerunit } from "../../../actions/powerunits";

class PowerunitDelete extends Component {
  componentDidMount() {
    this.props.getPowerunit(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.powerunit) {
      return "Are you sure you want to delete this powerunit, my dear?";
    }
    return `Are you sure you want to delete the powerunit ( all powerunits will be deleted also!!! ): ${this.props.powerunit.title}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deletePowerunit(id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/powerunits" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Powerunit"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  powerunit: state.powerunits[ownProps.match.params.id],
});

export default connect(mapStateToProps, {
  getPowerunit,
  deletePowerunit,
})(PowerunitDelete);
