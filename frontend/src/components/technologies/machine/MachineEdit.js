import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getMachine, editMachine } from "../../../actions/machines";
import MachineForm from "./MachineForm";

class MachineEdit extends Component {
  componentDidMount() {
    this.props.getMachine(this.props.match.params.id);
    //console.log(this.props.getMachine(this.props.match.params.id));
  }

  onSubmit = (formValues) => {
    this.props.editMachine(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.machine) {
      return <div>Loading...</div>;
    }
    return (
      <div className="ui container">
        <h2 style={{ marginTop: "2rem" }}>Edit Machine</h2>
        <MachineForm
          initialValues={_.pick(
            this.props.machine,
            "title",
            "price",
            "weight",
            "years"
          )}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  machine: state.machines[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getMachine, editMachine })(
  MachineEdit
);
