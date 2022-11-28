import React from 'react'
import CountChild from './Components/CounterChild.jsx'
class Counter extends React.Component {
    constructor() {
        super();
       this.state = {
         count: 0,
      }
    }
   UpdateCount(){
    return(
       this.setState({
           count:this.state.count+1
       })
    )
  }
  render() {
    return (
      <>
        <div style={{ textAlign: 'center', marginBottom: '23px', fontSize:'40px'}}>
          {/* <h1>{this.state.count}</h1> */}
          <CountChild myCounter={ this.state.count} />
          <button onClick={()=>this.UpdateCount()}>Click Me</button>
        </div>
      </>
    )
  }
}
export default Counter
