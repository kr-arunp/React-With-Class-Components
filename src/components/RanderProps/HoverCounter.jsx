import React from 'react'

function HoverCounter() {
  return (
  <>
    <div onMouseOver={this.props.IncrementCount}>
     Hover Count {this.props.count}
    </div>
  </>
  )
}
export default HoverCounter
