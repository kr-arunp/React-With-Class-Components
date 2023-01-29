import React from 'react'

function Counter() {
  return (
	<>
	<div>
	 <h1>Hi I AM </h1>
	  <button className='btn'
	  onClick={this.props.IncrementCount}
	  >Clicked {this.props.count} Times</button>
	</div>
	
	</>
  )
}

export default Counter
