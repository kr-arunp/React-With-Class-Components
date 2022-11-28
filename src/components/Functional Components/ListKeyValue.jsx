import React from 'react'
import List2 from './List2.jsx'
function ListKeyValue() {
    const Emp=[
        {
            name:'Arun',
            salary:'457k',
            Location:'Delhi',
            Phone:'152255'
        },
        //  {
        //     name:'Arun',
        //     salary:'845k',
        //     Location:'Delhi',
        //     Phone:'152255'
        // },
        //  {
        //     name:'Arun',
        //     salary:'5k',
        //     Location:'Delhi',
        //     Phone:'152255'
        // }

    ]

    // const EmpInfo=Emp.map(emp=>(
    //     <h1>
    //     Emp Name:{emp.name} <br/>
    //     Emp Salery:{emp.slary}<br/>
    //     Emp Location:{emp.Location}<br/>
    //     Emp Phone Num:{emp.Phone}
    //     </h1>))


           const EmpInfo = Emp.map((emp) => <List2 key={Emp.salary} emp={emp}/>);

           const  lis=Emp.map((emp)=>{return <li>{emp}</li> })

  return (
    <>
      {/* <div>ListKeyValue</div> */}

      {/* <h2>{Emp[0].name}</h2> */}
      {EmpInfo}

      <ul>{lis}</ul>
    </>
  );
}

export default ListKeyValue;