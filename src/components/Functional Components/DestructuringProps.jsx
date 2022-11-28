import React from 'react'

 const DestructuringProps = ({...info}) => {
  return (
   <>
   <h1>My Info: </h1>
   <h3>First Name: {info.Fname}</h3>
   <h3>Last Name:{info.Lname}</h3>
   <h3>Age Name:{info.Age}</h3>
   <h3>Phone Num: {info.Phone_Num}</h3>
   
   </>
  )
}
export default DestructuringProps;