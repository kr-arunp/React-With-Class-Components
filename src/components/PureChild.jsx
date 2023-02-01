import React, { Component } from 'react'

export default class PureChild extends Component {
		constructor(props){
			super(props)
			this.state={
				count: 0,
			}
		}
	componentDidMount() {
		console.log("regular Component is re-rendered")
	}
		Increment(){
			this.setState({
				count: this.state.count+1
			})
		}
		ClickHandler(){
			this.setState({
				count: this.state.count,
			})
		}
	
		render()
		{   console.log("regular Component is re-rendered")
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
