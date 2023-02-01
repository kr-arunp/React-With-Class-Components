/** @format */

import React, { Component } from "react";

export default class Props extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Input: 0,
    };
    this.ResetHandler = this.ResetHandler.bind(this);
  }
  ResetHandler() {
    console.log("CLicked reset button");
    this.props.newCount(0);
  }

  render() {
    return (
      <div>
        <button onClick={this.ResetHandler}>Reset Counter</button>
      </div>
    );
  }
}
