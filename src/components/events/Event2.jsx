import React,{useState} from 'react'
let inputStyle={
    fontSize:'23px',
      
}
export const AppEvent = () => {
     const [count, setCount] = useState(0);
  return (
      <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

        <p>{count}</p>
      <button
        onClick={ ()=>setCount(count + 1)}>Click Here</button>
    </div>
  )
};

const Event2 = () => {
    const [Fontsize,setFontsize]=useState('23px');
    const [MyText,setText]=useState('Hi i am Arun Kumar');
   let  DisplayMsg=() => {
     alert(
         "hi I am arun Kumar"
     )
   }
   const changeFontSize=() => {
        setFontsize('55px')  
   }
   
   let handleClick=(e) => {
       e.preventDefault();
  window.confirm("You Are Redirecting to the our Website")
   }
   let EnteredText=(e) => {
      setText(
            e.target.value
          )
   }
  return (
      <>
 <div style={{textAlign: 'center',marginTop:'34px'}}>
   <button style={{fontSize:Fontsize}}
     onClick={() =>{DisplayMsg()}}
     onMouseOver={changeFontSize}
    >Click Me</button>
    <h1>
  <a href="https://bit.ly/3otrKim"  target="_next" style={{textDecoration: 'none',color:'indigo'}}
  onClick={handleClick}
  >Click Now</a>
  </h1>
</div>

    <div>
    <label htmlFor="MyText" style={inputStyle}>Write Something..</label>
    <input type="text" id='MyText' style={inputStyle} onChange={EnteredText}/>
</div>
 <h5>You will see below</h5>
 <hr/>
<h4>{MyText}</h4>
 <hr/>

    </>
  )
}

export default Event2

 
