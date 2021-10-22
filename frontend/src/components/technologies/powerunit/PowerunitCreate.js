import React, { Component } from "react";
import { connect } from "react-redux";
import { addPowerunit } from "../../../actions/powerunits";
import PowerunitForm from "./PowerunitForm";

class PowerunitCreate extends Component {
  onSubmit = (formValues) => {
    this.props.addPowerunit(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: "2rem" }}>
        <PowerunitForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { addPowerunit })(PowerunitCreate);
