import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../layout/Modal";
import history from "../../../history";
import { getVariable, deleteVariable } from "../../../actions/variables";

class VariableDelete extends Component {
  componentDidMount() {
    this.props.getVariable(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.variable) {
      return "Are you sure you want to delete this variable, my dear?";
    }
    return `Are you sure you want to delete the variable ( all variables will be deleted also!!! ): ${this.props.variable.title}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteVariable(id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/variables" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Variable"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  variable: state.variables[ownProps.match.params.id],
});

export default connect(mapStateToProps, {
  getVariable,
  deleteVariable,
})(VariableDelete);
