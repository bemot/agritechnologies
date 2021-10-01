import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getTechnologies,
  deleteTechnologie,
} from "../../../actions/technologies";

class TechnologieList extends Component {
  componentDidMount() {
    this.props.getTechnologies();
  }

  render() {
    return (
      <div className="ui relaxed divided list" style={{ marginTop: "2rem" }}>
        {this.props.technologies.map((technologie) => (
          <div className="item" key={technologie.id}>
            <div className="right floated content">
              <Link
                to={`/technologies/delete/${technologie.id}`}
                className="small ui negative basic button"
              >
                Delete
              </Link>
            </div>
            <i className="large calendar outline middle aligned icon" />
            <div className="content">
              <Link
                to={`/technologies/edit/${technologie.id}`}
                className="header"
              >
                {technologie.title}
              </Link>
              <div className="description">{technologie.description}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  technologies: Object.values(state.technologies),
});

export default connect(mapStateToProps, { getTechnologies, deleteTechnologie })(
  TechnologieList
);
