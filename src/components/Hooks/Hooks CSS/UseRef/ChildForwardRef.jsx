import React, { forwardRef } from "react";

function ChildForwardRef(props,InputRef) {
  return (
    <div className="flex items-center justify-center text-center">
      <input type="text"  ref={InputRef}/>
    </div>
  )
}

export default forwardRef(ChildForwardRef);