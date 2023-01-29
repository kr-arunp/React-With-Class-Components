/** @format */

import React, { Component } from "react";

export default class ChildComponent extends Component {
  render() {
    return (
      <>
        <div>
          <h1>{this.props.render(true)}</h1>
        </div>
      </>
    );
  }
}
