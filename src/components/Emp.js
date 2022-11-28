/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const mystyle = {
  //   backgroundColor:"red",
};

let d = new Date().toLocaleDateString();
let dt = new Date().toLocaleTimeString();
export let MyDate = () => {
  return (
    <div>
      <h1>{`Current Date  is ${d}`}</h1>
      <h1>{`Current Time is ${dt}`}</h1>
    </div>
  );
};

export let EmpData = ({name,Post,salary,Experience,Age,DOB}) => {
  return (
    // <p >Hi my name is arun</p>
    <>
      <div style={mystyle}>
        {/* 
            <h1> {`Employee Name:${props.name}`}</h1>
         <h1> Employee Post: {props.Post}</h1>
         <h2>Employee salary: {props.salary}</h2>
         <h2> Employee Experience:{props.Experience}</h2>
         <h3> Employee DOB: {props.DOB}</h3>
         <h3> Employee Age:{props.Age}</h3>
         */}
        <h1> {`Employee Name:${name}`}</h1>
        <h1> Employee Post: {Post}</h1>
        <h2>Employee salary: {salary}</h2>
        <h2> Employee Experience:{Experience}</h2>
        <h3> Employee DOB: {DOB}</h3>
        <h3> Employee Age:{Age} {Post}</h3>
      
      </div>
    </>
  );
};
