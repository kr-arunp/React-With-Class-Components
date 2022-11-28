import React, { Component } from 'react'
import MountingPhaseB from './MountingPhaseB';

 class MountingPhaseA extends Component {
 
 //1st method 
 constructor(props) {
   super(props)
 
   this.state = {
       count: 0,
   }
     console.log("MountingPhaseA: constructor is called");  
 }
 static getDrivedStateFromProps(props,state){
  console.log("MountingPhaseA: getDrivedStateFromProps is called");
  //it will return a new State
     return null;
}
componentDidMount(){
    console.log("MountingPhaseA: componentDidMount is called");
}
 
  render() {
    console.log("MountingPhaseA: render() is called");
    return (
      <div>
        helloworld
         <MountingPhaseB/>
      </div>
    )
  }
}

export default MountingPhaseA