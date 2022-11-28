import React,{useState,useEffect} from 'react'
import UseEffectChild from './UseEffectChild';

const UseEffectOnProps = () => {
 const [Count, setCount]=useState(0);
 const [Data, setData] =useState(1000);
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(()=>{
  //ComponentDidUpdate lifecycle is called
   console.log("Componet is re-rendered...");
   console.log("Event Listeners Attadded");
    window.addEventListener('resize',WindowWidthHandler);
    // document.title = window.innerWidth;
    //CLean up Function or componentWillUnmount() is called
    return () => {
   console.log("Event Listeners removed from the DOM");
    window.removeEventListener("resize",WindowWidthHandler);
    }

  
  })
  const WindowWidthHandler=(e) => {
    setWindowWidth(window.innerWidth);
  }
  
  return <>
      <UseEffectChild count={Count} data={Data} />
    <button onClick={()=>{setCount(Count+1)}}>Increment Num count</button>
    <button onClick={()=>{setData(Data-1)}}>Decrement Data Count</button>
   <div>
      <h1>Current Window Size is {WindowWidth}</h1>
   </div>
  </>
}

export default UseEffectOnProps
