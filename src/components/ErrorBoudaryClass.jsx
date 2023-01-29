import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'

export default class ErrorBoundaryClass extends Component {
  render() {
	return (
	  <>
		<div>
		 <h1>Hi I Am Arun</h1>
		 
		 <ErrorBoundaryClass>
			<ErrorBoundary Hero={"BatMan"} />
			<ErrorBoundary Hero={"Iron Man"} />
			<ErrorBoundary Hero={"Salman Khan"} />
			{/* <ErrorBoundary Hero={"Joker"} /> */}
		 </ErrorBoundaryClass>
		
		</div>	
			
	  </>
	)
  }
}

