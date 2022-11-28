import React, { useState, useRef } from 'react'

const UnControlled = () => {
  const [msg, setMsg] = useState('')
  const name = useRef(null)

  const handleChange = (e) => {
       e.preventDefault()
    setMsg(name.current.value);
  }
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          marginTop: '50px',
        }}
      >
        <form>
          <label htmlFor="Message"></label>
          <input
            type="text"
            name="Message"
            id="msg"
            ref={name}
          />
          <br />
          <br />
          <input type="button" value="Submit"
        
          />
        </form>
      </div>
      <div>
        <h1
          style={{
            color: 'red',
            fontFamily: 'monospace',
            fontSize: '40px',
            backgroundColor: 'blue',
          }}
        >{msg}</h1>
      </div>
    </>
  )
}
export default UnControlled
