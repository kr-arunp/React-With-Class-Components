/** @format */
import React, { Component } from "react";
import ConditionalRendering from "./ConditionalRendering";
// import ChildDes from "./ChildDes";
// import DeProps from "./DefaultProps";
import PropsAsMethod from "./PropsAsMethod";
// let Stu = {
//   name: "Ram",
//   age: 22,
//   branch: "computer Engineering",
// };
export default class ParentForDes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Greeting: "HI ,Good Morning",
    };
  }
  Say() {
    alert(`${this.state.Greeting}`);
  }

  render() {
    return (
      <>
        <h1>Parent Component</h1>
        <div>
          {/* <ChildDes Stu={Stu}/> */}
          {/* <DeProps Stu={Stu} /> */}
          {/* <PropsAsMethod Say={this.Say.bind(this)} /> */}
          <ConditionalRendering/>
          
        </div>
      </>
    );
  }
}
