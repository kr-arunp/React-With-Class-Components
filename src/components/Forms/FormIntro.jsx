import React from 'react'
import './FormIntro.css';
const FormIntro = () => {
  return (
    <>
    <div className = 'Form'>
      <div className='MyForm'>
          <h2 style = { { backgroundColor: 'indigo',color:'White'}}
          >This is a Simple Form in React Js</h2>
        <form action="./App.jsp" method="get">
            <label htmlFor="Fname" className='Fname'>
             <span> Enter Your First Name</span>
            </label>
          <input type="text" id="Fname" placeholder="First name"
            autoComplete='on' autoFocus={true} />
          <br />
          <label htmlFor="Lname" className='Lname'>Enter Your Last Name:</label>
          <input type="text" id="Lname" placeholder="Last name.." />
          <br />
            <label htmlFor="Age" className='Age'>
              <span>  
              Enter Your Age
             </span>
            </label>
          <input type="number" name="Age" id="Age" maxLength={60} />
            <br />
           
            <input
              style={{
                fontSize: '20px',
                marginTop: '10px',
                color:'white'
                
              }}
              id='submit'
              type="submit" value="Submit" />


        </form>
        </div>
        </div>
    
    
    
    </>

  )
}

export default FormIntro