import React, { Component } from "react";
import { connect } from "react-redux";
import { addOperation } from "../../actions/operations";
import OperationForm from "./OperationForm";

class OperationCreate extends Component {
  onSubmit = (formValues) => {
    this.props.addOperation(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: "2rem" }}>
        <OperationForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { addOperation })(OperationCreate);
