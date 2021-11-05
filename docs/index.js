import React from "react";
import ReactDOM from "react-dom";
import ImageUploader from "react-images-upload";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (file) => {
    let form_data = new FormData();
    form_data.append("title", "very big tractor_2");
    form_data.append("slug", "bit_tractor_1eee_33");
    form_data.append("caption", "what is that i do not know");
    form_data.append("image", file);

    axios.post(`http://localhost:8000/api/photos/`, form_data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  async onDrop(pictureFiles, pictureDataURLs) {
    await this.setState({
      pictures: this.state.pictures.concat(pictureFiles),
    });
    //console.log(this.state.pictures);
    this.handleSubmit(this.state.pictures[0]);
  }

  render() {
    return (
      <ImageUploader
        withIcon={true}
        withPreview={true}
        buttonText="Choose images"
        onChange={this.onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
        maxFileSize={5242880}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
