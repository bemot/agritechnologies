import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../layout/Modal";
import history from "../../history";
import { getOperation, deleteOperation } from "../../actions/operations";

class OperationDelete extends Component {
  componentDidMount() {
    this.props.getOperation(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.operation) {
      return "Are you sure you want to delete this operation, my dear?";
    }
    return `Are you sure you want to delete the operation: ${this.props.operation.title}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteOperation(id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Operation"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  operation: state.operations[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getOperation, deleteOperation })(
  OperationDelete
);
