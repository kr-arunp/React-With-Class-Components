/** @format */

// this consist the counter logic
import React, { Component } from "react";
const newUpdatedComponent = (OriginalComponent) => {
  class New_HOC_Component extends Component {
    render() {
      return <OriginalComponent name={"arun"} />;
    }
  }
  return New_HOC_Component;
};
export default newUpdatedComponent;
