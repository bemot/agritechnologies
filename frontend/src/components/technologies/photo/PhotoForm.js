import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import ImageUploader from "react-images-upload";
import _ from "lodash";
import ReactHtmlParser from "react-html-parser";

class PhotoForm extends Component {
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

  refreshPage() {
    window.location.reload(false);
  }

  onDrop = (pictureFiles) => {
    //console.log("here 2", pictureFiles);
    this.setState({
      image: pictureFiles[0],
    });
  };

  showPhoto = () => {
    if (this.props.initialValues)
      return (
        <div>{ReactHtmlParser(this.props.initialValues.admin_thumbnail)}</div>
      );
    else
      return (
        <ImageUploader
          withIcon={false}
          singleImage={true}
          withPreview={false}
          withLabel={false}
          buttonText={"Вибрати картинку"}
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
          maxFileSize={5242880}
        />
      );
  };

  onSubmit = (formValues) => {
    //console.log(formValues);
    //console.log("here 1", this.state.image);

    //console.log("here 1", pictureFiles);
    //let formdata = new FormData();

    //formdata.append("title", formValues.title);
    //formdata.append("slug", formValues.slug);
    //formdata.append("caption", formValues.caption);
    //formdata.append("image", this.state.image);

    //axios.post(`http://localhost:8000/api/photos/`, form_data).then((res) => {
    //  console.log(res);
    //  console.log(res.data);
    // calling parrent function onSubmit (bobik)
    if (this.props.initialValues) this.props.onSubmit(formValues);
    else this.props.onSubmit(formValues, this.state.image);
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

          <this.showPhoto />

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
  if (!formValues.slug) {
    errors.slug = "Надайте коротку назву змінної";
  }

  return errors;
};

export default reduxForm({
  form: "photoForm",
  touchOnBlur: false,
  validate,
})(PhotoForm);
