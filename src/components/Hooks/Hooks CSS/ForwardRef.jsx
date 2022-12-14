import React, { useRef } from "react";
import ChildForwardRef from './UseRef/ChildForwardRef'

function ForwardRef() {
let InputRef=useRef(null);
let InputFieldUpdated =()=>{
  InputRef.current.focus();
  InputRef.current.style.color='red';
  InputRef.current.value=234;
  InputRef.current.style.padding ='12px';
}
  return (
    <div style={{textAlign:'center'}}>
   <ChildForwardRef ref={InputRef}/>  
   <button onClick={InputFieldUpdated}>Update InputBox</button>
    </div>
  )
}
export default ForwardRef