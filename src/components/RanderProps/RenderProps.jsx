/** @format */

import React, { Component } from "react";
// import ChildComponent from "./ChildComponent";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import CommonCountLogic from "./CommanCountLogic";
export default class RenderProps extends Component {
  render() {
    return (
      <>
        <div>Hi</div>
        <div>
          {/* <ChildComponent render={(isLoggedIn)=>isLoggedIn ?"Hello Arun": "Guest"} /> */}
          
          <CommonCountLogic
            render={(count, IncrementCount) => {
              <Counter count={count}  IncrementCount={IncrementCount} />;
            }}   
          />
          <CommonCountLogic
            render={(count, IncrementCount) => {
              <HoverCounter count={this.count} IncrementCount={this.IncrementCount} />;
            }}
          />
          <h1>sfhdsfjdh</h1>
        </div>
      </>
    );
  }
}
