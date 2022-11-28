import React from 'react'

export const PersonalInfo = () => {
  const [Info, setInfo] = React.useState({
    Fname: 'Arun',
    Lname: 'Kumar',
    Phone: '9825',
  })
  const [StatusForm,setStatusForm]=React.useState(true)
  const [isSubmit,setisSubmit]=React.useState(false)
  
  const ChangeHandler=(e)=>{
    setInfo({
        ...Info,
        [e.target.name]: e.target.value,
    })
  
  }
  
  const SubmitHandler=(e)=> {
      setTimeout(()=>e.preventDefault(),1000);
      alert(`Your Personal Info 
       First Name ${Info.Fname}
       Last Name ${Info.Lname}
       Phone Number ${Info.Phone}
        `)
       if(window.confirm("Is The Above Info is Correct?")){
         alert("Form Has Been Succesfully Submitted");
           setStatusForm(true) 
           setisSubmit(true)
           
       }else{
          alert("Please Fill Correct  Info")
           setStatusForm(false) 
          
           
          
       }
  }
  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          color: 'yellowgreen',
          fontSize: '44px',
          textDecoration: 'underline',
          lineHeight: '23px',
          whiteSpace: 'pre',
        }}
      >
        Personal Info form
      </h1>
      <form onSubmit={SubmitHandler} 
      className="conatiner" style={{textAlign:'center'}}>
        <input type="text" style={{
           padding:'12px', }} 
           name="Fname"
          placeholder="Enter Your First Name"
           value={Info.Fname}
           onChange={ChangeHandler}
           />
        <br />
         <input type="text" style={{
           padding:'12px',marginTop:"12px"}} 
           name="Lname"
          placeholder="Enter Your Last Name" 
           value={Info.Lname}
           onChange={ChangeHandler}
           />
            <br />
         <input type="number" style={{
           padding:'12px',marginTop:"12px"}} 
           name="Phone"
          placeholder="Enter Your Phone Num.." 
           value={Info.Phone}
           onChange={ChangeHandler}
           />
           <br />
           <button className='btn' style={{
            fontSize:"25px", marginTop:'12px',textAlign:"center"}}>Submit</button>
              <h4>{StatusForm ? (isSubmit ? <h4 style={{color:'grren'}}>Submitted👍</h4>:<h4 style={{color:'blueviolet'}}>Not Yet Submit</h4>):<h4 style={{color:'red'}}>Error Encountered ❎</h4> }</h4>
      </form>
      
      <div style={{textAlign:'center',color:'blue'}}>
          <h3>YournFirst Name is :{ Info.Fname}</h3>
          <h3>Your Last Name is: { Info.Lname}</h3>
          <h3>Your Phone Name is: { Info.Phone}</h3>
      </div>
    </>
  )
}
