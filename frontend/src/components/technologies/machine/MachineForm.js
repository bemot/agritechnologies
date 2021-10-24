import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { getPhotos } from "../../../actions/photos";

class MachineForm extends Component {
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

  componentDidMount() {
    this.props.getPhotos();
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    //console.log(this.props.photos);
    const btnText = `${this.props.initialValues ? "Update" : "Add"}`;
    return (
      <div className="ui segment">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="title"
            component={this.renderField}
            label="Назва машини"
          />
          <Field
            name="price"
            component={this.renderField}
            label="Ціна машини: грн"
          />
          <Field
            name="weight"
            component={this.renderField}
            label="Ваша машини: кг"
          />
          <Field
            name="years"
            component={this.renderField}
            label="Вік машини: роки"
          />

          <label>Image</label>
          <Field name="image" component="select" label="Image">
            <option></option>
            {this.props.photos.map((photo) => (
              <option key={photo.id} value={photo.id}>
                {photo.title}
              </option>
            ))}
          </Field>

          <button className="ui primary button">{btnText}</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Введіть назву машини";
  }
  if (!formValues.price) {
    errors.price = "Введіть ціну машини";
  }

  return errors;
};

const mapStateToProps = (state) => ({
  photos: Object.values(state.photos),
});

export default connect(mapStateToProps, { getPhotos })(
  reduxForm({
    form: "machineForm",
    touchOnBlur: false,
    validate,
  })(MachineForm)
);
