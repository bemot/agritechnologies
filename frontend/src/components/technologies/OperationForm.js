import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { getTechnologies } from "../../actions/technologies";

class OperationForm extends Component {
  renderField = ({ input, label, meta: { touched, error } }) => {
    return (
      <div className={`field ${touched && error ? "error" : ""}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {touched && error && (
          <span className="ui pointing red basic label">{error}</span>
        )}
      </div>
    );
  };

  componentDidMount() {
    this.props.getTechnologies();
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    console.log(this.props.technologies);
    const btnText = `${this.props.initialValues ? "Update" : "Add"}`;
    return (
      <div className="ui segment">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field name="technologie_id" component="select" label="Technologie">
            {this.props.technologies.map((tech) => (
              <option key={tech.id} value={tech.id}>
                {tech.title}
              </option>
            ))}
          </Field>

          <Field name="title" component={this.renderField} label="Title" />
          <Field
            name="description"
            component={this.renderField}
            label="Description"
          />

          <Field name="activated" component="select" label="Activated">
            <option value={false}>Не активовано</option>
            <option value={true}>Активовано</option>
          </Field>
          <br />
          <Field name="completed" component="select" label="Completed">
            <option value={false}>Не завершено</option>
            <option value={true}>Завершено</option>
          </Field>
          <br />
          <button className="ui primary button">{btnText}</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Please enter at least 1 character";
  }

  return errors;
};

const mapStateToProps = (state) => ({
  technologies: Object.values(state.technologies),
});

export default connect(mapStateToProps, { getTechnologies })(
  reduxForm({
    form: "operationForm",
    touchOnBlur: false,
    validate,
  })(OperationForm)
);
