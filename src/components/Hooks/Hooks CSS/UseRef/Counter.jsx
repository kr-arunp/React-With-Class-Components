import React from "react";
function Counter() {
  const [Input, setInput] = React.useState("");
  const Count = React.useRef(null);
  const inputRef = React.useRef(null);
  const CountStyle = React.useRef(null);
  React.useEffect(() => {
   inputRef.current.focus();
   inputRef.current.style.fontSize = "24px";
   inputRef.current.style.padding= "8px";
   
   Count.current = Count.current + 1;
  },[]);
  
  const ChangeHandler=(e) => {
    setInput(e.target.value);
     console.log(Count); 
     CountStyle.current.style.color ='red';
  }
  return (
    <>
      <div>
        <h1>Introduction to UseRef</h1>
        <input
          type="text"
          value={Input}
          onChange={ChangeHandler}
          ref={inputRef}
        />
        <h2  ref={CountStyle}>Current Count Is:{Count.current}</h2>
      </div>
    </>
  );
}

export default Counter;
