import React from 'react'
import './ControlledForm'
export const SimpleForm = () => {
    const [RePassword, setRePassword] = React.useState('')
  const [UserId, setUserId] = React.useState('')
  const [password, setpassword] = React.useState('')
    const [textarea, setTextarea] = React.useState('');
    
    const [MySub, setMySub] = React.useState('Maths');
    
    const HandlerChangeSub=(e) => {
        setMySub(e.target.value);
    }
    const TxtHandler=(e) => {
        setTextarea(e.target.value);
    }
  const ChangeHandlerlog = (e) => {
    setUserId(e.target.value)
  }
  
  const ChangeHandlerpass = (e) => {
    setpassword(e.target.value)
  }
  
  const ChangeHandlerRePass = (e) => {

    setRePassword(e.target.value)
  }
  const SubmitHandler = (e) => {
      e.preventDefault()
      if (password !== RePassword) {
          alert("Passward is Not Match")
      }
      else {
          alert(`
         Entered The UserId is:${UserId}
         Entered  Password is:${password}`)
      }
  }
  return (
    <>
      <div className="formcontainer">
        <span> Login Your Account</span>
        <div className="Myform">
          <hr />
          <form action="" onSubmit={SubmitHandler} className="FormTag">
            <label htmlFor="userId">Please Enter Your UserId</label>
            <input
              type="text"
              id="UserId"
              autoFocus={true}
              value={UserId}
              onChange={ChangeHandlerlog}
              placeholder="Enter User ID.."
              required
            />
            <br />
            <label htmlFor="password">Please Enter Your Passward</label>
            <input
              type="password"
              id="Password"
              value={password}
              placeholder="Your Passward.."
              onChange={ChangeHandlerpass}
              style={{ width: '80%', padding: '15px 10px' }
              }
              required
            />
            <br />
            <label htmlFor="RePassword">Please Re-Enter Your Password</label>
            <input
              type="password"
              id="RePassword"
              onChange={ChangeHandlerRePass}
              value={RePassword}
              name="RePassword"
              placeholder="Re-Enter Your Passward.."
              style={{ width: '80%', padding: '15px 10px' }}
              required
            />
            <br />
            <select name="subjects" id="sub"
             value={MySub}
             onChange={HandlerChangeSub}
               required >
            <option value="Maths">Maths</option>
            <option value="JAVA">JAVA</option>
            <option value="Science">Science</option>
            <option value="DBMS">DBMS</option>
            <option value="JavaScript">JavaScript</option>
            </select>
            <button type="submit" id="btn">Login Now</button>
            <br />
            <textarea name="textarea" className="txt" cols={38} rows={12} style={{resize:'vertical',textAlign:"left"}} 
            value={textarea}
            onChange={TxtHandler}
            placeholder="Enter Something.."
            ></textarea>
          </form>
        </div>
      </div>
    </>
  )
}
