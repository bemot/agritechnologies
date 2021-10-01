import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getVariables, deleteVariable } from "../../../actions/variables";

class VariableList extends Component {
  componentDidMount() {
    this.props.getVariables();
  }

  render() {
    return (
      <div className="ui relaxed divided list" style={{ marginTop: "2rem" }}>
        {this.props.variables.map((variable) => (
          <div className="item" key={variable.id}>
            <div className="right floated content">
              <Link
                to={`/variables/delete/${variable.id}`}
                className="small ui negative basic button"
              >
                Delete
              </Link>
            </div>
            <i className="large calendar outline middle aligned icon" />
            <div className="content">
              <Link to={`/variables/edit/${variable.id}`} className="header">
                {variable.title}
              </Link>
              <div className="description">{variable.description}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  variables: Object.values(state.variables),
});

export default connect(mapStateToProps, { getVariables, deleteVariable })(
  VariableList
);
