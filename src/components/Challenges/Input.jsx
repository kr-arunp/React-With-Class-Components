import React from 'react'

const MyInput = ({ colorValue, setColorValue }) => {
  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault}>
          <label htmlFor="ColorName">
            Enter Color Name:
            <br />
            <input
              autoFocus={true}
              type="text"
              value={colorValue}
              placeholder="write Any color"
              onChange={(e) => setColorValue(e.target.value)}
            />
          </label>
        </form>
      </div>

      <div>
        <h1 style={{
         color:'red',
          backgroundColor: colorValue,
          fontFamily:'monospace',
          letterSpacing:'4px',
          lineHeight:'34px',
          padding:'10px',
          border:'2px solid blue',
          margin:'15px'
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga harum
          facere maxime provident, aliquam veritatis dolores repellendus placeat
          ullam amet vel. Perspiciatis unde magnam dignissimos optio expedita
          officia cupiditate?
        </h1>
      </div>
    </>
  )
}
export default MyInput
