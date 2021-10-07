import * as React from "react";
import { connect } from "react-redux";
import { getOperations } from "../../actions/operations";

class OperationListReport extends React.Component {
  componentDidMount() {
    this.props.getOperations();
  }

  render() {
    console.log(this.props.operations);

    return (
      <div>
        <h2>ОПЕРАЦІЇ:</h2>
        <ul>
          {this.props.operations.map((o) => (
            <li key={o.id}>
              <span>
                {o.id}) {o.title}
              </span>
              <br />
              <span>{o.description}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  operations: Object.values(state.operations),
});

export default connect(mapStateToProps, { getOperations })(OperationListReport);
