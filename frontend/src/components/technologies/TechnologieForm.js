import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class TechnologieForm extends Component {
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

  renderTextArea = ({ input, label, meta: { touched, error } }) => {
    //console.log(input);
    return (
      <div className={`textarea ${touched && error ? "error" : ""}`}>
        <label>{label}</label>
        <textarea rows="3" {...input} autoComplete="off" />
        {touched && error && (
          <span className="ui pointing red basic label">{error}</span>
        )}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    const btnText = `${this.props.initialValues ? "Update" : "Add"}`;
    return (
      <div className="ui segment">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field name="title" component={this.renderField} label="Title" />
          <Field
            name="description"
            component={this.renderTextArea}
            label="Description"
          />
          <button className="ui primary button">{btnText}</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Введіть назву технології вирощування";
  }
  if (!formValues.description) {
    errors.description = "Надайте опис технології";
  }

  return errors;
};

export default reduxForm({
  form: "technologieForm",
  touchOnBlur: false,
  validate,
})(TechnologieForm);
