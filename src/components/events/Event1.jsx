import React,{useState} from 'react'

const EventExample= () => {
  const [bg,setBg]=useState('red');
  const [Name,setName]=useState('Click Me');
  // const bgcolor="red";
  let newbg='yellow';
  const BgChange=()=>{
      setBg(newbg)
      setName("Ohh You Clicked😂")
    // console.log("hello");
  };
  const newBg=()=>{
    console.log('object');
    setBg('purple');
  }
  return (
    <>
    <div style={{ backgroundColor:bg}}>
      { /* <button onClick={BgChange} onDoubleClick={newBg}>{Name}</button> */}
      <button onMouseOut={BgChange} onMouseOver={newBg}>{Name}
      </button>
    
    </div>
    </>
  )
}
export default EventExample