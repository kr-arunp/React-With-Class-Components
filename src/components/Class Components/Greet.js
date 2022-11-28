import React from "react";

import ButtonChange from './ButtonChange';
export class MyGreetingClass extends React.Component 
{
  constructor(){
    super();
    this.state={
      empName:"Arun",
      Salary:"44k",
      Post:"SDE",
    }
  }
  render(){
    return(
      <div>
      <h1>Employee Name:{this.state.empName}</h1>
      
      <h1>Employee Salary:{this.state.Salary}</h1>

    
     </div>
    );
  }

}
let dataName="GIT";


export default class GreetClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Arun Kumar",
      age: 23,
    };
    // this.msg = this.msg.bind(this);
  }
  msg() {
    this.setState({ name: "kumar" });
  }

  render() {
    return (
      <>
        <h1>hi i am arun</h1>
        <h1>{dataName}</h1>
        <h1>{this.state.name}</h1>
        <button
          style={{ textAlign: "center", fontSize: "22px" }}
          onClick={()=>this.msg()}
        >
          Update Data
        </button>

        <h1>{this.state.name}</h1>
        <h1>
          Hi My Name is {this.state.name} {this.state.age}
        </h1>
        <MyGreetingClass />
        <ButtonChange/>
      </>
    );
  }
}

