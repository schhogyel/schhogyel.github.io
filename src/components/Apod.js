import React from "react";
import { getImages } from "../utils/getImages";
import Loader from "react-loader";
import { Transition } from "react-transition-group";

const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: "inline-block",
  backgroundColor: "#8787d8"
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};
class Apod extends React.Component {
  state = {
    apod: {},
    loaded: null
  };
  componentDidMount() {
    getImages().then(data => {
      this.setState({ apod: data, loaded: true });
    });
  }

  render() {
    return (
      <Transition in={this.props.inProp} timeout={duration}>
        <Loader loaded={this.state.loaded}>
          <div className="relative h-screen">
            <img
              className="w-screen h-screen relative"
              src={this.state.apod.url}
              style={{ objectFit: "cover" }}
            />
            <div
              className="absolute pin-l text-white p-4"
              style={{ bottom: "1%" }}
            >
              {this.state.apod.title}{" "}
            </div>
            <div
              className="absolute pin-r text-white p-4 text-xs"
              style={{ bottom: "1%" }}
            >
              &copy; {this.state.apod.copyright}
            </div>
          </div>
        </Loader>
      </Transition>
    );
  }
}

export default Apod;
