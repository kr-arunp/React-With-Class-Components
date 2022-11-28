import React from 'react'
import FunEvent1 from "./FunEvent1";
import {FunEvent2} from "./FunEvent1";

class ClassEvent extends React.Component{
    constructor(){
        super()
        this.state={
            Name:'Arun',
            NewName:'Arun'

        }

    this.ChangeName=this.ChangeName.bind(this);
        // this.ChangeName=this.ChangeName.bind(this)
        // console.log(this);
    }
//  ChangeName=()=>{
//          this.setState(
//              {
//              Name:"ArunKumar Prajapati",
//              })
//           }
 ChangeName(){
         this.setState(
             {
             Name:"ArunKumar Prajapati",
             })
          }
           ChangeName1=(e)=>{
         this.setState(
             {
             Name:"here I am arun",
             })
             alert(e)
          }
ChangeNameInParent=()=>{
        this.setState(
            {
                NewName:'My Name is Arun Kumar'
            }
        )
}

     render(){
        return (
            <>
        <h1>{this.state.Name}</h1>  
         {/* <button onClick={() => this.ChangeName()}>See Full Name</button> */}
         {/* <button onClick={this.ChangeName.bind(this)}>See Full Name</button> */}
         <button onClick={this.ChangeName}>See Full Name</button>
          <h1>{this.state.NewName}</h1>  
          <FunEvent1 Change={this.ChangeNameInParent} />
           <FunEvent2 Change1={this.ChangeName1}/>
            </>
        )
    }
}
export default ClassEvent;