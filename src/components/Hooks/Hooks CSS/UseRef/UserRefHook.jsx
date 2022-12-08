import React,{useRef,useEffect} from 'react'

const UserRefHook = () => {
const [Count,setCount]=React.useState(0);
const InputRef=useRef(null);
const btnRef = useRef(null);
React.useEffect(()=>{
   console.log("rerender the component");
})

useEffect(() => {
  InputRef.current.focus();
  },[])



let ClickHandler=() => {
console.log("ClickHandler is called");
// InputRef.current.value=2344;
InputRef.current.focus();
}

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        ref={InputRef}
        onChange={() => console.log(InputRef.current)}
      />
      <button onClick={ClickHandler}>Click Me</button>

      <p>Current Count: {Count}</p>
      <button onClick={ClickHandler} 
      ref={btnRef}>
        Increment
      </button>
    </div>
  );
}

export default UserRefHook