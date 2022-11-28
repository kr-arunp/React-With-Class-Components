import React from 'react'
import { useState } from 'react'

const MyCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Hi 👨 I Am Arun Kumar</h1>

      <div
        style={{
          padding: '12px',
          display: 'grid',
          justifyContent: 'center',
        }}
      >
        <button
          style={{ fontSize: '29px',color:'yellow'}}
          onClick={() => setCount(count + 1)}
        >
          ➕
        </button>
        <h1 style={{ fontSize: '29px', textAlign: 'center',color:'red' }}>{count}</h1>
        <button
          style={{ fontSize: '29px' }}
          onClick={() => setCount(count - 1)}
        >
          ➖
        </button>
      </div>
    </>
  )
}
export default MyCounter
