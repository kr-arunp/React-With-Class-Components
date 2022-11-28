import React, { useState} from 'react';
import './Hooks CSS/ToDo.css'
const UseEffectExample=() => {
  const [Msg, setMsg] = useState('This This A homePage');
  const [Input, setInput] = useState('');
  
   React.useEffect(() => {
     return () => {
        <h1>Hi Hello World</h1>
        console.log("This ia An UseEffectExample")
     }
   }, [])
   
   const HandleOnChange=(e)=>{
     setInput(e.target.value);
   }
   const HandleOnClick=(e)=>{
    setMsg(Input)
   }
   const Enter = (e) => {
    if (e.keyCode=== 13) {
      HandleOnClick();
    }
  };
   
  return (
  <>
    <div>
    <h1 style={{textAlign:'center'}}>Hi I am Arun Kumar</h1>
        <h1>{Msg}</h1>
        <input type="text" name="input" id="in" 
        value={Input}
         onKeyDown={Enter}
        onChange={HandleOnChange}
        />
        <button
        onClick={HandleOnClick}
        >Click to change the state</button>
    </div>
    </>
  
  )
}
export default UseEffectExample;
 
