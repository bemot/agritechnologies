import React, { Component } from "react";
import axios from "axios";

const refreshPage = () => {
  window.location.reload();
};

class SimplePhoto extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        title: "",
        slug: "",
        image: null,
      },
      show: false,
      Data: [],
      selectedFileName: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.makeRandomSlug = this.makeRandomSlug.bind(this);
  }

  makeRandomSlug(len) {
    let s = "";
    while (s.length < len)
      s += Math.random()
        .toString(36)
        .substr(2, len - s.length);
    //console.log(s);
    return s;
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/photos/")
      .then((res) => this.setState({ Data: res.data }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.refreshList();
  }

  handleChange(e) {
    const data = this.state.info;
    data[e.target.name] = e.target.value;
    this.setState({ info: data });
  }

  handleImageChange(e) {
    const data = this.state.info;
    data.image = e.target.files[0];
    this.selectedFileName = e.target.files[0].name;
    this.setState({ info: data });
  }

  handleSubmit = () => {
    this.state.info.slug = "slug_" + this.makeRandomSlug(15);
    console.log(this.state.info.slug);
    let form_data = new FormData();
    form_data.append("title", this.state.info.title);
    form_data.append("slug", this.state.info.slug);
    form_data.append("image", this.state.info.image);

    axios
      .post("http://localhost:8000/api/photos/", form_data)
      .then(() => {
        //console.log("Uploaded");
        this.setState({
          info: {
            title: "",
            slug: "",
            image: null,
          },
          show: true,
          selectedFileName: null,
        });
      })
      .catch((err) => console.log(err));
    //bobik
    refreshPage();
  };

  handleModal = () => {
    if (!this.state.show) this.setState({ show: true });
    else this.setState({ show: false });
  };

  UploadImageModal = ({ show, handleModal }) => {
    const showHideClassName = show ? "w3-modal w3-show" : "w3-modal";
    const btnImage = `${
      this.selectedFileName ? this.selectedFileName : "Додати картинку"
    }`;

    return (
      <div className={showHideClassName}>
        <div
          className="w3-container w3-modal-slug w3-round w3-animate-top"
          style={{ maxWidth: "500px", width: "70%", padding: "20px" }}
        >
          <button
            type="button"
            onClick={handleModal}
            className="w3-button w3-yellow w3-round w3-display-topright"
          >
            X
          </button>
          <h2 className="w3-center">Завантажити картинку</h2>
          <form>
            <input
              type="text"
              name="title"
              value={this.state.info.title}
              placeholder="Внесіть назву для картинки"
              onChange={this.handleChange}
              className="w3-input w3-border w3-round w3-margin-bottom"
            />

            <label
              htmlFor="imgholder"
              className="w3-button w3-green w3-block w3-round w3-margin-bottom w3-card"
            >
              {btnImage}
            </label>
            <input
              id="imgholder"
              type="file"
              onChange={this.handleImageChange}
              accept="image/jpeg, image/png"
              className="w3-hide"
            />
            <button
              type="button"
              onClick={this.handleSubmit}
              className="w3-button w3-blue w3-round w3-card"
            >
              Ввід
            </button>
          </form>
        </div>
      </div>
    );
  };

  render() {
    //bobik show all uploaded images
    const dataComponent = this.state.Data.map((data) => {
      return (
        <div
          key={data.slug}
          className="w3-third w3-round w3-margin-bottom w3-padding"
        >
          <div className="w3-card-4 w3-display-container w3-round">
            <a target="blank" href={data.image}>
              <img
                src={data.image}
                alt={data.title}
                className="w3-image w3-hover-grayscale w3-round"
              />
            </a>
            <div className="w3-display-topmiddle w3-text-red">
              <h4>{data.title}</h4>
            </div>
            <p className="w3-justify w3-text-gray w3-padding">{data.title}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <nav className="w3-bar w3-blue w3-margin-bottom">
          <button
            type="button"
            onClick={this.handleModal}
            className="w3-button w3-bar-item w3-teal w3-border w3-round"
          >
            Внести картинку в базу даних
          </button>
        </nav>

        <div className="w3-row">{dataComponent}</div>

        <this.UploadImageModal
          show={this.state.show}
          handleModal={this.handleModal}
        />
      </div>
    );
  }
}

export default SimplePhoto;
