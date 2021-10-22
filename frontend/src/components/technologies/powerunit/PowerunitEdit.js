import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getPowerunit, editPowerunit } from "../../../actions/powerunits";
import PowerunitForm from "./PowerunitForm";

class PowerunitEdit extends Component {
  componentDidMount() {
    this.props.getPowerunit(this.props.match.params.id);
    //console.log(this.props.getPowerunit(this.props.match.params.id));
  }

  onSubmit = (formValues) => {
    this.props.editPowerunit(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.powerunit) {
      return <div>Loading...</div>;
    }
    return (
      <div className="ui container">
        <h2 style={{ marginTop: "2rem" }}>Edit Powerunit</h2>
        <PowerunitForm
          initialValues={_.pick(
            this.props.powerunit,
            "title",
            "price",
            "weight",
            "years",
            "image"
          )}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  powerunit: state.powerunits[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getPowerunit, editPowerunit })(
  PowerunitEdit
);
