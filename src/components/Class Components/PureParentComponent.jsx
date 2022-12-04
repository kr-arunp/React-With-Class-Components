import React, { Component,PureComponent } from 'react'
import PureChildComponent from "./PureChildComponent";

export default class PureParentComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
     count:0,
    }
  }
  render() {
  console.log("Component is Re-Rendered")
    return (
       <div>
          <PureChildComponent currentCount={this.state.count}/>
           <button 
           onClick={()=>this.setState({count:this.state.count})}
           >Click To Update</button>
       
       </div>
    )
  }
}
