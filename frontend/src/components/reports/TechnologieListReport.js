import * as React from "react";
import { connect } from "react-redux";
import { getTechnologies } from "../../actions/technologies";

class TechnologieListReport extends React.Component {
  componentDidMount() {
    this.props.getTechnologies();
  }

  render() {
    console.log(this.props.technologies);

    return (
      <div>
        <h2>Technologies</h2>
        <ul>
          {this.props.technologies.map((t) => (
            <li key={t.id}>
              <span>{t.title}</span>
              <br />
              <span>{t.description}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  technologies: Object.values(state.technologies),
});

export default connect(mapStateToProps, { getTechnologies })(
  TechnologieListReport
);
