import React,{useState} from 'react'

export const Input = (props) => {
 
    const [Text, setText] = useState(
        {
            Fname:"",
            Lname:""
        }
    );

    const onChange = e => {
    setText({
      ...Text,
      [e.target.name]: e.target.value,
    })
  }
 const handleSubmit = e => {
    e.preventDefault()
    console.log("submitted")
  }
  return (
      <>
    <div>Input</div>

    <form onSubmit={handleSubmit}>
    <legend htmlFor="Fname">Enter your First Name:</legend>
    <input
     type="text"
     name="Fname"
      className="input-text"
      value={Text.Fname}
      onChange={onChange}
    />
     <br/>
    <legend htmlFor="Lname">Enter your Last Name:</legend>
    <input
     type="text"
     name="Lname"
      className="input-text"
    value={Text.Lname}
     onChange={onChange}
    />
  <br/> <br />
    <button className="input-submit">Submit</button>
    </form>

    </>
  )
}
