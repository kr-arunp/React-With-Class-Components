// import React from 'react'

// const List2 =(Emp_Info)=> {
//   return (
//     <>
//     <h1>Hi i ansjd</h1>
//     </>
//   );
// }

// export default List2

import React from 'react'

const List2 = ({emp}) => {
  return (
    <>
      <div>
        
          <h1>
            Employee name:{emp.name} <br />
            Employee Salary:{emp.salary}
            <br />
            Employee Phone:{emp.Phone}
            <br />
            Employee Location:{emp.Location}

        </h1>
      </div>
    </>
  );
};


export default List2