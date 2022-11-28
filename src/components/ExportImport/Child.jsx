import React from 'react'

const Chid = ({EmpInfo,stu }) => {
  return (
    <>
    <div>Child</div>
    <div>
      <h1 style={{textAlign: 'center'}}>Employee Imformation</h1>
      <h2>Emp Name:{EmpInfo.name}</h2>
      <h2>Emp salary:{EmpInfo.Salary}</h2>
    </div>
    <div>
      <h1 style={{textAlign: 'center'}}>Student Details</h1>
      <h2>Student Name :{stu.first_name}</h2>
      <h2>Student Name :{stu.last_name}</h2>
      <h2>Student Name :{stu.class}</h2>
    </div>
    </>
  )
}

export default Chid