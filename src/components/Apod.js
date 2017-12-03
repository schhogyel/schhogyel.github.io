import React from "react";
import { getImages } from "../utils/getImages";

class Apod extends React.Component {
  state = {
    apod: {}
  };
  componentDidMount() {
    getImages().then(data => {
      this.setState({ apod: data });
    });
  }

  render() {
    return (
      <div>
        <img
          className="w-screen h-screen"
          src={this.state.apod.url}
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  }
}

export default Apod;
