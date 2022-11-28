import React,{useState,useEffect} from 'react'

const SideEffect = () => {
    const [count, setCount] = useState(0);
    const [Input, setInput] = useState("");
    const [info,setInfo] = useState([]);
    useEffect(() => {
        document.title = `${info.length} words`;
},[info])


const ChangeHandler=(e)=>{
   setInput(e.target.value)

}
const AddInfoHandler=() => {
    // e.preventDefault();
    setInfo((data) => [...data,...[' '],Input])
    setInput('')
}

const onEnterHandler=(e) => {
  if(e.keyCode===13){
      AddInfoHandler();
  }
}
return (
     <>
     <div 
     style={{textAlign:'center',display:'flex',flexDirection:'column',justifyContent: 'center'}}
     >
     <div>
        <h1>Total Count :{count}</h1>
         <button onClick={()=>setCount(count+1)}>Increment</button>
         <button onClick={()=>setCount(count-1)}>Decrement</button>
     </div>
     <div>
        <input type="text"
        style={{marginTop:'22px',padding:'8px 9px',fontSize:'23px',borderRadius:'19px'}}    
        value={Input}
        onChange={ChangeHandler}
        onKeyDown={onEnterHandler}
        />
        <button
        style={{marginTop:'22px',padding:'9px 8px',fontSize:'25px',borderRadius:'19px',marginLeft:'12px'}}    
        onClick={AddInfoHandler}
        >Add Info
        
        </button>
     
     </div>
     <div>
     <h4 
     style={{marginTop:'22px',padding:'19px 18px',fontSize:'25px',borderRadius:'1px 1px 15px 15px',marginLeft:'12px',
      border:'2px solid  green',textOverflow:'ellipsis',
      overflow:'hidden'
      
     }}    

     >
      {
         info.map((w,i)=>{
          return(
            <span key={i}>{w}</span>
          )
         })
      }
     </h4> 
   
     </div>
     </div>
     </>
     
  )
}

export default SideEffect