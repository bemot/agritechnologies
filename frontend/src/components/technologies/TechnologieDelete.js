import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../layout/Modal";
import history from "../../history";
import { getTechnologie, deleteTechnologie } from "../../actions/technologies";
import { getOperations, getOperation } from "../../actions/operations";
import _ from "lodash";

class TechnologieDelete extends Component {
  componentDidMount() {
    this.props.getTechnologie(this.props.match.params.id);
    this.props.getOperations();
  }

  areTechnologieUsed(tech_id) {
    //console.log("tech_id", tech_id);
    _.find(this.props.operarations, function (o) {
      return o.technologie_id === tech_id;
    });
  }
  renderContent() {
    // console.log(this.props.technologie.id);
    console.log(this.areTechnologieUsed(this.props.technologie.id));

    if (!this.props.technologie) {
      return "Are you sure you want to delete this technologie, my dear?";
    }
    return `Are you sure you want to delete the technologie: ${this.props.technologie.title}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteTechnologie(id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/technologies" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Technologie"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  technologie: state.technologies[ownProps.match.params.id],
  operations: Object.values(state.operations),
});

export default connect(mapStateToProps, {
  getOperations,
  getTechnologie,
  deleteTechnologie,
  getOperation,
})(TechnologieDelete);
