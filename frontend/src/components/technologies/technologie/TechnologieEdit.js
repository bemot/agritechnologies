import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getTechnologie, editTechnologie } from "../../../actions/technologies";
import TechnologieForm from "./TechnologieForm";

class TechnologieEdit extends Component {
  componentDidMount() {
    this.props.getTechnologie(this.props.match.params.id);
    //console.log(this.props.getTechnologie(this.props.match.params.id));
  }

  onSubmit = (formValues) => {
    this.props.editTechnologie(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.technologie) {
      return <div>Loading...</div>;
    }
    return (
      <div className="ui container">
        <h2 style={{ marginTop: "2rem" }}>Edit Technologie</h2>
        <TechnologieForm
          initialValues={_.pick(this.props.technologie, "title", "description")}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  technologie: state.technologies[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getTechnologie, editTechnologie })(
  TechnologieEdit
);
