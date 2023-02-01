import React, { Component } from 'react'

export default class PureComponentExample extends React.PureComponent {
  constructor(props) {
	super(props)
  
	this.state = {
	   count:0
	}
  }
  componentDidMount(){
    console.log("Pure Component is re-render")
  }
  Increment(){
    this.setState({
    count:this.state.count+1
    })
  }
  ClickHandler(){
  this.setState({
	  count: this.state.count,
  })
  }
  
  render() {
  console.log("rerendered");
	return (
	  <div>
	<h1>Pure Component example</h1>
	
	
	<button onClick={this.Increment.bind(this)}>Increment Count</button>
			<h1>{this.state.count}</h1>
	<button onClick={this.ClickHandler.bind(this)}>Click</button>
	  </div>
	)
  }
}
