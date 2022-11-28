import React, { useRef } from 'react'
const UseRefForm = () => {
  const Fname = useRef();
  const Lname = useRef();
  const message = useRef();
  const email = useRef();
  
  
const handleSubmit=(e)=> {
    e.preventDefault();
   
    // console.log('First Name:', Fname.current.value);
   
    // console.log('Last Name:', Lname.current.value);
   
    // console.log('message:', message.current.value);
   
    // console.log('email:', email.current.value);
  }
  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="Fname">Enter 🛩️🧑‍⚕️ Your First Name</label>
          <input
            type="text"
            name="Fname"
            id="Fname"
            style={{ marginBottom: '12px' }}
            ref={Fname}
          />
          <br />
          <label htmlFor="Lname">Enter Your Last Name</label>
          <input type="text" name="Lname" id="Lname" ref={Lname} />
          <br />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            style={{ margin: '12px' }}
            ref={email}
          />
          <br /> <br />
          <label htmlFor="message">Message</label>
          <textarea id="message" ref={message} />
          <br /> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
export default UseRefForm
