import React, { Component } from 'react'
  
export default class CounterChild extends Component {
  constructor(){
      super();
      let a = 123;
      let b = 13;
    console.log(a + b);
  }
  
  componentWillMount(){
    console.log("The componentWillMount method is called");
         this.getName();

  }
  componentDidMount(){
    console.log("Component did mount!");
     this.getName();
    
  }
  
 getName=() => {
  console.log("My Name is Arun Kumar,please Call me Arun")
   }
  render() {
    return (
        <>
        <h1>HI I Am Arun</h1>  
        </>
    
    
    )
  }
}
