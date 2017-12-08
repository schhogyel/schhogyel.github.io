---
title: "Rendering React Components on the Google Maps"
date: "2017-11-03"
---

Putting google maps in react project is made simple with google-react-map

This is a simple implementation of google-react-map

```jsx
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const Pin = ({ text }) => <div> {text}</div>;

export default class MapContainer extends Component {
  static defaultProps = {
    center: { lat: 27.5, lng: 90.5 },
    zoom: 9
  };
  render() {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR-GOOGLE-MAP-API-KEY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Pin lat={27.031221} lng={90.075554} text={"Wakleytar"} />
        </GoogleMapReact>
      </div>
    );
  }
}
```
