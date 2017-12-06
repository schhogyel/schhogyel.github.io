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
        <div>
          <Loader loaded={this.state.loaded}>
            <img
              className="w-screen h-screen"
              src={this.state.apod.url}
              style={{ objectFit: "cover" }}
            />
          </Loader>
        </div>
      </Transition>
    );
  }
}

export default Apod;
