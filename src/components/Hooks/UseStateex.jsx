import React from 'react'

const MyCounteruseState = () => {
  const [Curr_Count, setCurr_Count] = React.useState(0)
  console.log(React.useState('Hello world'))

  const [UserId, setUserId] = React.useState('')
  const [Pass, setPass] = React.useState('')

  const onsubmitHandler = (e) => {
     e.preventDefault()
    alert(`Entered User Id is ${UserId} 
           Entered Password is ${Pass}`)
  }

  return (
    <>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '30px',
        }}
      >
        <div>
          <button
            onClick={() => setCurr_Count(Curr_Count + 1)}
            style={{ fontSize: '40px', color: 'red' }}
          >
            ➕
          </button>
          <h1> {Curr_Count}</h1>
          <button
            onClick={() => setCurr_Count(Curr_Count - 1)}
            style={{ fontSize: '40px' }}
          >
            ➖
          </button>
        </div>
      </div>

      <div>
      <form action=""  onSubmit={onsubmitHandler}>
        <br /> <br />
        <label htmlFor="UserId">
          Enter Your UserId:
          <input
            type="text"
            name="UseId"
            id="UserId"
            value={UserId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </label>
        <br /> <br />
        <label htmlFor="Pass">
          Enter Your Password:
          <input
            type="password"
            name="Pass"
            id="Pass"
            value={Pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <br /> <br />
        <button >Login Now</button>
      </form>
      </div>
    </>
  )
}
export default MyCounteruseState
