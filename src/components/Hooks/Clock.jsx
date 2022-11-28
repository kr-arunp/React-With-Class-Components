import React from 'react'

const Clock = () => {
    let currTime = new Date().toLocaleTimeString()
    setInterval(()=>HeandleTime(),1000);
  const [CurrentTime, setCurrentTime] = React.useState(currTime)
  const HeandleTime = () => {
      let currT = new Date().toLocaleTimeString();
      setCurrentTime(currT)
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'yellowgreen' }}>
        Simple Live Clock
      </h1>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            color: 'blue',
            fontSize: '43px',
          }}
        >
          {CurrentTime}
        </h1>

        <button
          style={{
            marginTop: '5px',
            fontSize: '24px',
            color: 'red',
            borderRadius: '5px',
            padding: '12px 12px',
          }}
          onClick={HeandleTime}
        >
          Update The Time
        </button>
      </div>
    </>
  )
}

export default Clock
