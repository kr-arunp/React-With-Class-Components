// @ts-ignore
import '../Hooks CSS/ToDo.css'
import axios from "axios";
import React from "react";
import "../Hooks CSS/json-server.css";
import { useState, useEffect } from "react";
const JsonServer = () => {
  const [UserData, setUserData] = useState([]);
  let URL = `http://localhost:3004/users`;
  useEffect(() => {
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
             <input type="text"
             placeholder='Enter a ID...'
             
             />
             <button id='btn'>
               Search
             </button>
             
             
             </p>
        </div>
      </div>
      {/*
     <div className="container1">
        {UserData.map((user) => {
          return (
            <div className="container key={user.id}">
              <span className="id"> User ID:{user.id}</span>
              <span className="Fname">User First Name:{user.first}</span>
              <span className="Lname">User Last Name:{user.last}</span>
              <span className="Email"> User Email Id:{user.email}</span>
              <span className="Location ">User Location :{user.country}</span>
            </div>
          );
        })}
      </div>
      */}
    </>
  );
};
export default JsonServer;
