import React, { Children } from 'react'
import Child from './Child';
let a='arun kumar';


let emp={
  name:'Ajay',
 EmpId:1232,
Salary:'23k',
address:"Near Police station",
phone:67654455
}

let StuInfo= { 
  first_name : 'Anamika',
  last_name : 'rai',
  age : 19,
  student_id : 20,
  class : 'BE 6TH sem'
  }
const Intro = () => {
  return (
    <>
    <div>Intro</div>  
        {a}
        {a}
       <Child  EmpInfo={emp} stu={StuInfo}/>
    {/* <div>
      <h1>Hi I am Arun Kumar</h1>
       <div style={{ backgroundColor: 'lightblue',color:'yellow'}}>
           <h1 style={{ backgroundColor: 'lightblue',color:'yellow'}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas facilis illum deserunt!
           </h1>
           <h3 style={{color:"indigo", fontSize:'32px'}}>My Skilis:
            <strong>Javascript,JAVA,Python ,html,css,tailwind css </strong>

           </h3>
       </div>

       <p>
        here i am arun kumar and I am pursuing computer engineering from Gandhinagar institute of technology
        i am proficient in js.java .react as well as in Python as

       </p>
    </div>
     */}
    </>
  )
}


const Greet=() => {
  
  return <>
"Hello ReactJs";

  </>
}

export default Intro
export {a,Greet as g};