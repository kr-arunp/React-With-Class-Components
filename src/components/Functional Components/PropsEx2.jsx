import React from 'react'
import Props1 from '../Class Components/Props1'
export const PropsEx2 = (props) => {
 const {Fname,Lname} = props;
  return (
   <>
   <h1>First Name is:{Fname}  and Last Name is:{Lname}</h1>

   <Props1 f={Fname} l={Lname}/>
   </>
  )
}
