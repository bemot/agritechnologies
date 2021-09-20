import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getOperations, deleteOperation } from "../../actions/operations";

class OperationList extends Component {
  componentDidMount() {
    this.props.getOperations();
  }

  render() {
    return (
      <div className="ui relaxed divided list" style={{ marginTop: "2rem" }}>
        {this.props.operations.map((operation) => (
          <div className="item" key={operation.id}>
            <div className="right floated content">
              <Link
                to={`/operations/delete/${operation.id}`}
                className="small ui negative basic button"
              >
                Delete
              </Link>
            </div>
            <i className="large calendar outline middle aligned icon" />
            <div className="content">
              <Link to={`/operations/edit/${operation.id}`} className="header">
                {operation.title}
              </Link>
              <div className="description">{operation.description}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  operations: Object.values(state.operations),
});

export default connect(mapStateToProps, { getOperations, deleteOperation })(
  OperationList
);
