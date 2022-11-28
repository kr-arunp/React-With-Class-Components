import React from 'react'
import { EmpData } from "./Emp";
import { MyDate} from "./Emp";
let empinfo = {
  name: "Atul",
  Post: "Senior Software Engineer",
  salary: "95k",
  Experience: "8+ Years",
  DOB: "12 june 1989",
  Age: 36,
};
const PropsExample = () => {
  return (
    <>
      {/*<PropsExample />}*/}
      <EmpData
        name={empinfo.name}
        Post={empinfo.Post}
        salary={empinfo.salary}
        Experience={empinfo.Experience}
        DOB={empinfo.DOB}
        Age={empinfo.Age}
      />
      <MyDate />
    </>
  );
};
export default PropsExample;
