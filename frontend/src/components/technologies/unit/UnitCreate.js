import React, { Component } from "react";
import { connect } from "react-redux";
import { addUnit } from "../../../actions/units";
import UnitForm from "./UnitForm";

class UnitCreate extends Component {
  onSubmit = (formValues) => {
    this.props.addUnit(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: "2rem" }}>
        <UnitForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { addUnit })(UnitCreate);
