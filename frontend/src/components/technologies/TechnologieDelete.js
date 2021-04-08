import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../layout/Modal";
import history from "../../history";
import { getTechnologie, deleteTechnologie } from "../../actions/technologies";

class TechnologieDelete extends Component {
  componentDidMount() {
    this.props.getTechnologie(this.props.match.params.id);
  }

  renderContent() {
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
        <Link to="/" className="ui button">
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
});

export default connect(mapStateToProps, { getTechnologie, deleteTechnologie })(
  TechnologieDelete
);
