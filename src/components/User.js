 const UserData=()=>{
   return (
     <div className="UserData">
       <h1>Student Name is:{UserInfo.name}</h1>
       <h2>Student Age is:{UserInfo.Age}</h2>
       <h3>Student Phone is:{UserInfo.Phone}</h3>
       <h4>Student Enrollment is:{UserInfo.enroll}</h4>
     </div>
   );
}
let UserInfo={
    name:"arun",
    Age:19,
    Phone:"6263495645",
    enroll:"7008"
}

export default UserData;
