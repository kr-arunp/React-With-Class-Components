import React, { Component, createRef } from "react";

class FormRef extends Component {
  constructor() {
    super();
    this.InputRef_Fname = createRef();
    this.InputRef_Lname = createRef();
    this.ButtonRef_btn = createRef();
    this.state = {
      Input_Fname: "",
      Input_Lname: "",
    };
  }
  ChangeHandler1=(e)=>{
   this.setState({
      Input_Fname:e.target.value
   })
   this.InputRef_Fname.current.focus=true;
  
  
  }
    ChangeHandler2=(e)=>{
   this.setState({
      Input_Lname:e.target.value
   })
}

componentDidMount(){
  this.InputRef_Fname.current.focus();

}

SubmitHandle=(e) => {
  e.preventDefault();
  this.InputRef_Fname.current.style.color = "red";
  this.InputRef_Lname.current.style.color = "red";
   this.InputRef_Fname.current.style.backgroundColor = "gold";
   this.InputRef_Fname.current.style.padding = "15px";
   
     this.InputRef_Lname.current.style.backgroundColor = "gold";
     this.InputRef_Lname.current.style.padding = "15px";
     
     this.ButtonRef_btn.current.style.backgroundColor = "blue";
     this.ButtonRef_btn.current.style.backgroundColor = "sunlightblue";
     this.ButtonRef_btn.current.style.padding = "12px";
     this.ButtonRef_btn.current.style.borderRadius = "8px";
     this.ButtonRef_btn.current.style.color = "white";
}
  render() {
    return (
      <>
        <form action="#" style={{ textAlign: "center" }}>
          <p>
            <label htmlFor="Fname">Enter your First Name </label>
            <input
              type="text"
              ref={this.InputRef_Fname}
              onChange={(e) => {
                this.ChangeHandler1(e);
              }}
            />
          </p>
          <p>
            <label htmlFor="Lname">Enter your Last Name </label>
            <input type="text" ref={this.InputRef_Lname} 
              onChange={(e) => {
                this.ChangeHandler2(e);
              }}
            
            />
          </p>
          <button type="submit" ref={this.ButtonRef_btn}
           onClick={(e)=>this.SubmitHandle(e)}
          >
            Submit
          </button>
        </form>

        <h1>First Name is :{this.state.Input_Fname} </h1>
        <h1>Last Name is  :{this.state.Input_Lname}</h1>
      </>
    );
  }
}
export default FormRef;
