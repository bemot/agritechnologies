import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getOperation, editOperation } from "../../../actions/operations"; // bobik remember about actions
import OperationForm from "./OperationForm";

class OperationEdit extends Component {
  componentDidMount() {
    this.props.getOperation(this.props.match.params.id);
    //console.log(this.props.getOperation(this.props.match.params.id));
  }

  onSubmit = (formValues) => {
    this.props.editOperation(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.operation) {
      return <div>Loading...</div>;
    }
    return (
      <div className="ui container">
        <h2 style={{ marginTop: "2rem" }}>Edit Operation</h2>
        <OperationForm
          initialValues={_.pick(
            this.props.operation,
            "technologie",
            "title",
            "description",
            "activated",
            "completed"
          )}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  operation: state.operations[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getOperation, editOperation })(
  OperationEdit
);
