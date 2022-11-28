import React,{useState} from 'react'
// import {const} from "./../StuInfo";

 const MyState= () => {
  const [Num,setNum]=useState(0);
   const [click, setClick] = useState([]);
   
  const addNumber = () => {
    setClick([
      ...click,
      {
        id: click.length,
        value: Math.random() * 1000
      }
    ]);
  };
   
  return (
    <>
    <div>
    <h1>useState Examples</h1>
     <h1>Current Number is {Num} that Is { Num%2==0?'even':'Odd'}</h1>
     <button onClick={()=>setNum(Num+1)}>Click here.</button> <br/><br/>
   <ul>
       {click.map(item => (
          <li key={item.id}>{item.value}</li>
       ))}
      </ul>
      <button onClick={addNumber}>
        Click me
      </button>
      </div>
    </>
    
  )
}
export default MyState;
