import React, { useEffect }  from 'react'

const UseEffectChild = (props) => {

useEffect(()=>{
  // alert(`UseEffect is called`)
},[props.data ,props.count])

  return (
    <>
          <h1>Total Count is {props.count}</h1>
          <h1>Data Value is  {props.data}</h1>
    </>
  )
}

export default UseEffectChild