import React, { Component } from 'react'
// let i=0;
export default class ButtonChange extends Component {
  constructor() {
    super();
    this.state = {
      data:0
    }
    // this.handerUpdate = this.handerUpdate.bind(this);
  }

  //   handerUpdate(){
  //     this.setState(
  //         {
  //             data:i+1,
  //         }
  //     )
  //   }
  handerUpdate() 
  {
    // this.state.data+= 1
    // i = this.state.data;
    // console.log(this.state.data);

    this.setState(
      {
        // data:this.state.data+1,
        data: this.state.data + 1,
      },
      () => console.log(this.state.data)
    );
  }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={()=> this.handerUpdate()}>Update Count</button>
      </div>
    );
  }
}
