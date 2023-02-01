import React, { Component } from 'react'
import Props from './Props';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.IncrementHandler = this.IncrementHandler.bind(this);
    this.DecrementHandler = this.DecrementHandler.bind(this);
    this.DataFromChild = this.DataFromChild.bind(this);
  }
  IncrementHandler() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  DecrementHandler() {
    this.setState({
      count: this.state.count-1,
    });
  }
  DataFromChild(newCount){
     console.log(newCount)
     this.setState({
      count:newCount
     })
  }



  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <button onClick={this.IncrementHandler}>Increment ➕</button>
          <h1>{this.state.count}</h1>
          <button onClick={this.DecrementHandler}>Increment ➖</button>
				<Props newCount={this.DataFromChild} />
        </div>
      </>
    );
  }
}

