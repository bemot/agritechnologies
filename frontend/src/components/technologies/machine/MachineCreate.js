import React, { Component } from "react";
import { connect } from "react-redux";
import { addMachine } from "../../../actions/machines";
import MachineForm from "./MachineForm";

class MachineCreate extends Component {

  onSubmit = (formValues) => {

    this.props.addMachine(formValues);

  };

  render() {
    return (
      <div style={{ marginTop: "2rem" }}>
        <MachineForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { addMachine })(MachineCreate);
