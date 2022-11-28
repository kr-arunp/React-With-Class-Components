import React from 'react'
import './Input'
const MySquare = ({ colorValue }) => {
  return (
    <>
      <section style={{ backgroundColor:colorValue }} className="Square">
        <p>{colorValue ? colorValue : 'Empty'} </p>
      </section>
    </>
  )
}
MySquare.defaultProps = {
  colorValue: 'Empty Color Value',
}
export default MySquare
