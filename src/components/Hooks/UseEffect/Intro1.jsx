import React from 'react'
const Intro1 = () => {
  const [Count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    let out= setTimeout(() => {
       setCount(Count+1);
       },1000);
      
    document.title = 'total count:' + Count;
  });
  
  return (
    <div>
      <h1>Total Count is {Count}</h1>
      
      <button onClick={()=>setCount(Count+1)}>Click to Increment</button>
    </div>
  )
}

export default Intro1;