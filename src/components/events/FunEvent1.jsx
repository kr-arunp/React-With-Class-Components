// import React from 'react'
import React, { Component } from 'react'


export class FunEvent2 extends Component {

  render(props) {
    return (
      <>
      <br />
      <br />
        <button onClick={()=>this.props.Change1("Hi I Am John")}>Click me</button>
      
      </>
    )
  }
}

let FunEvent1=props=> {
    const {Change}=props;
  return (
      <>
      <br />
      {/* <br /> */}
      <h6>Hello World</h6>
     <button onClick={Change}>Change Text</button>
   
     </>
  )
}
export default FunEvent1