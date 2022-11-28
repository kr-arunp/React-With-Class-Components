
import React, { Component } from 'react'
export class ComponentDidUpdate_1 extends Component {
  constructor(props) {
    super(props)
    console.log("constructor called")
    this.state = {
        count: 0 
    }
  }
  componentDidUpdate(prevProps, prevState){
     console.log("componentDidUpdate called");
    //  console.log("prev state: " +prevState.count,this.state.count);
     if(prevState.count === this.state.count){
         alert("Prev and current state are same");
     }
  }
  shouldComponentUpdate(nextProps, nextState, nextContext){
      console.log("shouldComponentUpdate")
    //   console.log(this.state.count);
      if(this.state.count<10){
          return true;
      }else{
          return false;
      }
     
      
  }
  render() {
  console.log("render() called");
    return (
      <div>
            <h1 style={{textAlign: 'center'}}>{ this.state.count}</h1>
            <main style={{textAlign: 'center'}}>
            <button style={{marginLeft:'12px'}}
            onClick={()=>this.setState({count:this.state.count+1})}
            >Increment</button>
            <button style={{marginLeft:'12px'}}
            onClick={()=>this.setState({count:this.state.count -1})}
            
            >Decrement</button>
            </main>
      
      </div>
    )
  }
}
export default ComponentDidUpdate_1