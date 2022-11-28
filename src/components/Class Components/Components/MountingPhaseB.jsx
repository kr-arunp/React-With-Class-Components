import React, { Component } from 'react'
 class MountingPhaseB extends Component {
 
 //1st method 
 constructor(props) {
   super(props)
 
   this.state = {
       count: 0,
   }
     console.log("MountingPhaseB: constructor is called");  
 }
 static getDrivedStateFromProps(props,state){
  console.log("MountingPhaseB: getDrivedStateFromProps is called");
  //it will return a new State
     return null;
}
componentDidMount(){
    console.log("MountingPhaseB: componentDidMount is called");
}
 
  render() {
    console.log("MountingPhaseB: render() is called");
    return (
      <div>
       
      </div>
    )
  }
}

export default MountingPhaseB