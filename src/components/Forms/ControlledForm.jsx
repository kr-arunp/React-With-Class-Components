import React, { useState } from 'react'
import './FormIntro1.css'
const ControlledForm = () => {
  const [inputUser, setInputUser] = useState('')
  const [inputPass, setInputPass] = useState('')

  const inputChangeUserHandler = (e) => {
    e.preventDefault()
    setInputUser(e.target.value)
  }
    const inputChangePassHandler = (e) => {
      console.log(e.target.value)
      e.preventDefault()
        setInputPass(e.target.value)
  }
    const SubmitHander =(e) => {
              e.preventDefault();
              console.log(inputUser,inputPass);
        // UserList(inputUser,inpu tPass)
    alert(`Input data is 
       UserID:${inputUser}  
       Passward:${inputPass}`)
    }
    
    const UserList = ({user, pass}) => {
        return (
            <div>
                <ul>
                    <li>{ user}</li>
                    <li>{ pass}</li>
                </ul>
            </div>
        )
      
    }
  return (
    <>
      <h1>This is an Example of Controlled Form component</h1>
      <div className="formcontainer">
        <form onSubmit={SubmitHander}>
          <label htmlFor="UserId">
            Enter Your UserId
            <input
              type="text"
              name="userid"
              id="userid"
              placeholder="Enter your UserID"
              value={inputUser}
              onChange={inputChangeUserHandler}
            />
          </label>
          <br />
          <label htmlFor="Passward">
            Enter yout Passward
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Enter your Passward"
              value={inputPass}
              onChange={inputChangePassHandler}
            />
          </label>
          <button>Login Now</button>
        </form>
      </div>
    </>
  )
}
export default ControlledForm
