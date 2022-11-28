import React, { useState } from "react";

let Counter=()=>{
 
  let [Count, setCount] = useState(0);



    let btn1={
        color:'red',
        fontSize:"45px",
        padding:'19px',
    }
     let btn2 = {
       fontSize: "45px",
       color: "red",
       padding: "15px",
       position: 'relative',
     
     };

     let div1={
       height: '100vh',
       display: 'flex',
       alignItems:'center',
       justifyContent:'center',
       textAlign: 'center',


     }


    return (
      <>
        <div style={div1}>
          <button style={btn1} onClick={() => setCount(Count - 1)}>
            -
          </button>
          <h1 style={{ padding: "52px", fontSize: "38px" }}>{Count}</h1>
          <button style={btn2} onClick={() => setCount(Count + 1)}>
            +
          </button>
        </div>
      </>
    );
};

export default Counter;