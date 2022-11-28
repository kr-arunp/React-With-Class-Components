import React, { Component,useState } from "react";
// import { FunConditional } from "./Conditional";
export const NotificationCard = () => {
    const [notificationNum,setNotificationNum]=useState(0);
    let ve;
     if(notificationNum>=1)
     {
         ve=<p>You have {notificationNum} new notifications</p>
     }
     else{
         ve=<p>{notificationNum}</p>;
     }
  return (
   <>
    <div>
      {notificationNum >=1 &&
       (<p>You have {notificationNum} new notifications</p>)
      }
     <button onClick={()=>setNotificationNum(58)}>Check</button>
     <h1>{ve}</h1>

    </div>
   </>

  )
}








export function FunConditional(props) {
  const { isLoggedin } = props;
//   if (isLoggedin) {
//     return <button>Logout</button>;
//   } else {
//     return <button>Login</button>;
//   }
return(
    <>
    {isLoggedin?<button>Logout</button> : <button>Login</button>}
    </>
)
}
export default class Conditional extends Component {
  constructor() {
    super();
    this.state = {
      IsLoggin: 1,
    };
  }

  render() {
    // let msg;
    // if (this.state.IsLoggin) {
    //   msg = "Welcome Arun";
    // } else {
    //   msg = "Welcome Guest";
    // }
    // if(this.state.IsLoggin)
    // {
    // return <h1>Welcome Arun</h1>
    //  }
    // else {
    //    return <h1>Welcome Guest</h1>
    //    }
    return (
      <div>
        {/* <h1>{msg}</h1> */}
        this.state.IsLoggin?
        <h1>Welcome Arun</h1>:<h1>Welcome Guest </h1>
        <div>
          <FunConditional isLoggedin={this.state.IsLoggin} />
          <NotificationCard/>
        </div>
      </div>
    );
  }
}
