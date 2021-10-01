import React, { Component } from "react";
import { connect } from "react-redux";
import { addVariable } from "../../../actions/variables";
import VariableForm from "./VariableForm";

class VariableCreate extends Component {
  onSubmit = (formValues) => {
    this.props.addVariable(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: "2rem" }}>
        <VariableForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { addVariable })(VariableCreate);
