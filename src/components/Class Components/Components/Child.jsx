import React, { Component } from 'react'

export class Child extends Component {

  componentWillUnmount(){ 
  
      console.log('componentWillUnmount called');
  }

  render() {
    return (
    <>
    <div>
      <h1>I am a Child Component,I am Available in DOM</h1>
    </div>
    </>
    )
  }
}

export default Child