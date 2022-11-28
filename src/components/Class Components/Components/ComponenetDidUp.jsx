import React, { Component } from 'react'
import { UnMount } from "./UnMount";

export class ComponenetDidUp extends Component {
  constructor(props) {
  console.log("constructor");
    super(props)
    this.state = {
      count: 0,
    }
  }
  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate");
    console.log(`prev state: ${prevState.count} and Current State ${this.state.count}`);
  
  
  }
  render() {
  console.log("render");
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>{this.state.count}</h1>
        <button onClick={() => this.setState({count:this.state.count + 1})}>
          Increment
        </button>
        
        <UnMount/>
      </>
    )
  }
}

export default ComponenetDidUp
