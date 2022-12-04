import React, { Component,PureComponent } from 'react'

export default class PureChildComponent extends PureComponent {
  render() {
  console.log("Child COmponenet is re-rendered")
    return (
      <div>
        <h1>Hi I AM Arun Kumar </h1>
        <h1>Count is: {this.props.currentCount} </h1>
      </div>
    );
  }
}
