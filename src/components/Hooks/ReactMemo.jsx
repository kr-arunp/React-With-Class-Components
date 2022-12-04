import React, { useState } from "react";
import "./Hooks CSS/ToDo.css";
const ReactMemo =() => {
  const [count, setCount] = useState(1);
  const [Data, setData] = useState(10);
  
  let MyUseMemo=React.useMemo(()=>{
       console.log(`ShowData() function Is Called`);
       return Data;
     }, [Data])
  return (
    <div
      className="container"
      style={{ display: "block", textAlign: "center" }}
    >
      <h1>Count: {count}</h1>
      <h1>Data: {Data}</h1>
      <button id="btn" onClick={() => setCount(count + 1)}>
        Update Count
      </button>
      <button id="btn" onClick={() => setData(Data * count)}>
        Update Data
      </button>

      <p>The Data is {MyUseMemo}</p>
    </div>
  );
}

export default ReactMemo;

