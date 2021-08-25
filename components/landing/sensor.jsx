import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";

class VisibilitySensorImage extends Component {
  state = {
    visibility: false,
  };

  render() {
    return (
      <VisibilitySensor
        onChange={(isVisible) => {
          this.setState({ visibility: isVisible });
          console.log("hulu");
        }}
      >
        {this.props.children}
      </VisibilitySensor>
    );
  }
}

export default VisibilitySensorImage;
