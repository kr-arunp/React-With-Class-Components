/** @format */

import React, { Component } from "react";

export default class ChildDes extends Component {
  constructor(props) {
    super(props);
	//   const { name, age, branch }=this.props;;
	//   console.log(branch);
  }
  render() {
    const {name, age, branch }=this.props.Stu;
    return (
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{branch}</h1>
      </div>
    );
  }
}
