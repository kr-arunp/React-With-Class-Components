/** @format */

import React from "react";
import newUpdatedComponent from "./HigherOrderFun";

function Counter_Count(props) {
  return (
    <>
		  <button>Clicked times {this.props.name} </button>
    </>
  );
}

export default newUpdatedComponent(Counter_Count);
