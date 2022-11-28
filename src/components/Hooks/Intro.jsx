import React,{useState} from 'react';
import {Input} from "./Input";

 export const GeeetingMsg=()=>{
  const [Name,setName] = useState("Arun Kumar");
   return(
      <>
   <p>Hi My Name is {Name}</p>
  <button onClick={()=>{setName('Prajapati Arun')}}>Update Msg</button>


  <Input/>
  </>

   )
}
const Intro = () => {
      const  [Update,setUpdate]=useState(0);
     return (
        <div>     
     <div style={{textAlign: 'center' ,backgroundColor: 'indigo',color:"white",padding:'23px'}}>
        <button onClick={()=>setUpdate(Update+1)} style={{fontSize:'22px' ,width:'50px',height: '45px', marginTop:'43px'}}>+</button>
        <h1 style={{fontSize:'82px'}}>{Update}</h1>
        <button onClick={()=>setUpdate(Update-1)} style={{fontSize:'22px' ,width:'50px',height: '45px',marginBottom:'43px'}}>-</button>
     </div>

     <GeeetingMsg/>
       </div>
    );
}


export default Intro;

