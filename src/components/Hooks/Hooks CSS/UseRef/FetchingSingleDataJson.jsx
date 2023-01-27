import "../json-server.css";
import "../ToDo.css";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const FetchSingleRecordJson = () => {
  const [UserData, setUserData] = useState([]);
  const [Input, setInput] = useState("");
  const [UserId, setUserId] = useState(1);
  let ClickHandler = (e) => {
      if(Input===""){
        setInput("");
      }
      else if(Input>=60){
      alert("Not Available  there are only 60 entries");
      }
      else
      setUserId(Input);
    };
   let EnterHandler= (e) => {
     if(e.keyCode === 13){
     ClickHandler();
     }
   } 
    
    
    let URL = `http://localhost:3004/users/${UserId}`;
  useEffect(() => {
    if(UserId===0)
    setUserId(0);
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [URL]);
  return (
    <>
      <div
        style={{
          textAlign: "center",
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "10vh",
          zIndex: "5",
          backgroundImage:
            "linear-gradient(to right top, #051937, #171228, #190a1a, #12040d, #000000)",
          color: "white",
          marginTop: "0",
          padding: "12px 10px",
        }}
        className="p-8 monospace selection:bg-red-600"
      >
        <div>
          <h1 className="selection:bg-red-600">
            Creating Local Rest API json server
          </h1>
        </div>
      </div>
       <div className="container1">
      <div style={{ height: "90vh", marginTop: "12vh" }}>
        <p>
          <input
            type="text"
            placeholder="Enter a ID..."
            onKeyUp={EnterHandler}
            value={Input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button id="btn" onClick={ClickHandler}>
            Search
          </button>
        </p>
      </div>
       </div>
      

      { UserId>0 && (
            <div className="container">
              <span className="id"> User ID:{UserData.id}</span>
              <span className="Fname">
                UserData First Name:{UserData.first}
              </span>
              <span className="Lname">UserData Last Name:{UserData.last}</span>
              <span className="Email"> UserData Email Id:{UserData.email}</span>
              <span className="Location ">
                user Location :{UserData.country}
              </span>
            </div>
        
      )}
    </>
  );
};
export default FetchSingleRecordJson;
