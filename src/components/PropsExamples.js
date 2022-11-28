import { MyName } from "./props1";
import { MyFullName } from "./props2";
import MyClasscomp from "./ClassComp.js";
import Hello from "./Hello";
import Welcome from "./Welcome";
import {MyProps } from "./MyProps.js";
let a=2;
const PropsExample= () => {
  return (
    <>
      <MyName />
      <MyFullName />
      {a - 2}
      <MyClasscomp />
      <Hello />
      <Welcome />
      <hr />
      <MyProps Fname="Arun" Lname="Kumar" />
      <MyProps Fname="Aakash" Lname="Rajan" />
      <MyProps Fname="Nitin" Lname="Kumar" />
    </>
  );
};
export default PropsExample;
