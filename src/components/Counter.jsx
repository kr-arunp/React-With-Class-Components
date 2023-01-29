import React, { Component } from 'react'
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }
  incrementCounter= ()=>{
  this.setState((prevCount)=>{
    return ({
		count: prevCount.count+1
    })
  })

}
  render() {
    return (
      <>
        <div>
          <button onClick={this.incrementCounter}>Clicked {this.state.count} times</button>
        </div>
      </>
    );
  }
}
