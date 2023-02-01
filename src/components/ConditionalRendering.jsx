import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
  render() {
  let num=Math.floor(Math.random()*10)
	return (
	  <>
	  {
			num%2!=0? <h2 style={{color:'red'}}>{num} is odd</h2>:<h1 style={{color:'green'}}>{num} is even</h1>
	  }
	  
	  
	  </>
	)
  }
}





//using if and else 
// export default class  extends Component {
// 	render() {
	
// 		let num=Math.floor(Math.random()*100)
// 	   if(num%2!=0){
// 	    //   alert(`Number ${num} is not a even number`)
// 	  }else{
// 		//    alert("It is a even number");
// 	  } 
//   }
// }

