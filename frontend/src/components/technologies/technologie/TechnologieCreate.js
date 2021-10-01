import React, { Component } from "react";
import { connect } from "react-redux";
import { addTechnologie } from "../../../actions/technologies";
import TechnologieForm from "./TechnologieForm";

class TechnologieCreate extends Component {
  onSubmit = (formValues) => {
    this.props.addTechnologie(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: "2rem" }}>
        <TechnologieForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { addTechnologie })(TechnologieCreate);
