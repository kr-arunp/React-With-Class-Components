import React from 'react'
import '../Hooks/Hooks CSS/ToDo.css'
const Child = (props) => {
const [Input, setInput]=React.useState("");

 let data ="Arun Kumar";
 let style={
    fontWeight:900,
    fontFamily:'monospace',
    fontSize:'20px',
    underline:true,
    padding:'12px',
    color:'white',
 }
 
 const OnChangeHandler=(e)=>{
  setInput(e.target.value);
 }
  return (
    <div>
      <button onClick={() => props.UserData(data, style)} id="btn">
        Click Me!
      </button>
      <p>
        <input
          type="text"
          value={Input}
          onChange={OnChangeHandler}
          onKeyPress={() => props.bgcolor(Input)}
        />
      </p>
    </div>
  );
}
export default Child