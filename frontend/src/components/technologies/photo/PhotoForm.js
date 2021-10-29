import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Dropzone from "react-dropzone";
import request from "superagent";

class PhotoForm extends Component {
  onDrop(file) {
    var req = request.post("http://localhost:8000/api/image/").send(file);
    req.end(function (err, response) {
      console.log(file);
      console.log("upload done!!!!!");
    });
  }

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
    console.log(formValues);
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
          <Field name="slug" component={this.renderField} label="Slug" />
          <Field name="caption" component={this.renderField} label="Caption" />
          <div>
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some file here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>

          <button className="ui primary button">{btnText}</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Введіть назву змінної";
  }
  if (!formValues.value) {
    errors.value = "Надайте коротку назву змінної";
  }

  return errors;
};

export default reduxForm({
  form: "photoForm",
  touchOnBlur: false,
  validate,
})(PhotoForm);
