import React from 'react'

// eslint-disable-next-line no-unused-vars
// export const MyProps = (props) => {
//     console.log(props);
//   return (
//     <div>
//       <h1>My Name Is {props.Fname} </h1>
//       <h5>My Full Name is {props.Fname+" " + props.Lname} </h5>
//     </div>
//   );
// }
//ES6 New Way to use Props 
export const MyProps = ({ Fname, Lname }) => {
  console.log();
  return (
    <div>
      <h1>My Name Is {Fname} </h1>
      <h5>My Full Name is {Fname + " " + Lname} </h5>
    </div>
  );
};




// import React, { Component } from 'react';

//  class Myprops extends Component {
//     render() {
//          console.log(this.props);
//         return (
//           <div>
//             <h1>My Name Is {this.props.Fname} </h1>
//             <h5>My Full Name is {this.props.Fname + " " +this.props.Lname} </h5>
//           </div>
//         );
//     }
// }

