import React, { useState } from 'react'

const FormUnControlled = () => {
  const [input, setInput] = useState(React.createRef())
    const OnSubmitHandler = (e) => {
       e.preventDefault();  
    alert('Your form Has Been Submitted'+{input})
  }

  return (
    <>
      <h1> This is an Example of Un Controlled From</h1>

      <form onSubmit={OnSubmitHandler}>
        <label htmlFor="UserId">Enter Your UserId :- </label>
        <input type="text" name="UserId" />

        <br />
              <label htmlFor="Passward">Enter Your Passward:-
        {/* <input type="text" name="Passward" ref={input} /> */}
        <input type="password" name="Passward" ref={input} />
              </label>
        <br />
        <input type="submit" value="Login Now" />
      </form>
    </>
  )
}
export default FormUnControlled
