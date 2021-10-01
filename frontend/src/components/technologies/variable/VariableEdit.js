import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getVariable, editVariable } from "../../../actions/variables";
import VariableForm from "./VariableForm";

class VariableEdit extends Component {
  componentDidMount() {
    this.props.getVariable(this.props.match.params.id);
    //console.log(this.props.getVariable(this.props.match.params.id));
  }

  onSubmit = (formValues) => {
    this.props.editVariable(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.variable) {
      return <div>Loading...</div>;
    }
    return (
      <div className="ui container">
        <h2 style={{ marginTop: "2rem" }}>Edit Variable</h2>
        <VariableForm
          initialValues={_.pick(
            this.props.variable,
            "title",
            "description",
            "value",
            "od_vymiru",
            "activated"
          )}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  variable: state.variables[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getVariable, editVariable })(
  VariableEdit
);
