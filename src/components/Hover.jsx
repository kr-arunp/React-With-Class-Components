/** @format */

import React, { Component } from "react";

export default class Hover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
	incrementCounter=() => {
		this.setState((prevCount) => {
			return ({
				count: prevCount.count+1
			})
		})
	}


  render() {
    return (
      <>
        <div>
          <h1 onMouseOver={this.incrementCounter}>
            Hover Count is {this.state.count}
          </h1>
        </div>
      </>
    );
  }
}
