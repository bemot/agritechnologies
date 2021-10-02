import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnit, editUnit } from "../../../actions/units";
import UnitForm from "./UnitForm";

class UnitEdit extends Component {
  componentDidMount() {
    this.props.getUnit(this.props.match.params.id);
    //console.log(this.props.getUnit(this.props.match.params.id));
  }

  onSubmit = (formValues) => {
    this.props.editUnit(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.unit) {
      return <div>Loading...</div>;
    }
    return (
      <div className="ui container">
        <h2 style={{ marginTop: "2rem" }}>Edit Unit</h2>
        <UnitForm
          initialValues={_.pick(this.props.unit, "title", "value")}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  unit: state.units[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getUnit, editUnit })(UnitEdit);
