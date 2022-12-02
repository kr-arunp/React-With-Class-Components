import React from 'react'
import Child from './Child'
import "../Hooks/Hooks CSS/ToDo.css";
export const ChildToParent = () => {
  const [Name, setName] = React.useState("");
  const [Color, setColor] = React.useState({});
  const [BgColor, setBGColor] = React.useState({});
  
  function getUserData(data,MyStyle) {
    setName(data);
    setColor(MyStyle);
    getColor(data);
    // alert(MyStyle.color);
  }
  function getColor(data){
       console.log(data);
   let bgcolor={backgroundColor:data};
     setBGColor(bgcolor);
    }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Send the data from Child to Parent </h1>

      <h2 style={BgColor}>
        The Data in Parent Component is:{Name}
      </h2>
      <Child UserData={getUserData} bgcolor={getColor} />
    </div>
  );
}
