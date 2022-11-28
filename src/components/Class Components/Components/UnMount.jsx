import React, { Component } from 'react'
import { Child } from "./Child";

export class UnMount extends Component {
   constructor(){
      console.log("constructor is called");
     super();
     this.state={
       show:true,
     }
   }
   componentDidMount(){
      console.log("componentDidMount is called")
   }
   componentWillMount(){
     console.log("componentWillMount");
   }
   
  render() {
  console.log("render is called");
    return (
      <div>
         {
          this.state.show!==false?<Child/>: <h1>Child Component Will removed from the DOM</h1>
         }
         <button style={{
           fontSize:'21px',
           margin:'22px 45px',
          textAlign:'center',
          padding:'12px'
         }}
         onClick={()=>this.setState({show:!this.state.show})}>Toggle the Child Component</button>
      </div>
    )
  }
}

export default UnMount