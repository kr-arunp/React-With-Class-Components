import React, {useState,useEffect} from 'react'
import './Hooks CSS/ToDo.css'
const TitleName = () => {
    const [Name, setName] = useState("Arun");
    const [Input, setInput] =useState("");
    
useEffect(()=>{
//Mounting Phase of a  Component
    document.title = Name;
//Cleanup Function
return ()=>{   
}
},[])  //Dependencies Array

   const OnChangeHandler=(e) => {
       setInput(e.target.value);
   }
    const onClickHandler=() => {
        setName(Input);
   }
   const OnEnterHandler=(e)=>{
      if(e.keyCode === 13){
         onClickHandler();
      }
   }


  return (
<>
<h1>{Name}</h1>
<input type="text" name="Name" 
onChange={OnChangeHandler}
          onKeyDown={ OnEnterHandler}
value={Input}
/>
<button
 onClick={onClickHandler}
>CLick Me</button>






</>

  )
}

export default TitleName