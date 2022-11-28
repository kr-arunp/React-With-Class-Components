import React from "react";
import "../MyCss/GreetCss.css";
let Greet = "";

let d = new Date();
console.log(d.getHours());
if (d.getHours() < 12 && d.getHours() >= 1) {
  Greet = "Morning";
} else if (d.getHours() >= 12 && d.getHours() < 19) {
  Greet = "Afternoon";
} else {
  Greet = "Night";
}
export default function GreetingApp() {
  return (
    <>
      <h3
        style={{
          fontSize: "22px",
          color: "white",
        }}
      >
        #This is a Simple React App Challenge
      </h3>
      <div className="MyDiv">
        <div className="GreetCss">
          <h1>
            <span className="greet1"> Hello Sir/Madam</span>
            {<br />}
            <span className="greet2">Good {Greet} </span>
          </h1>
        </div>
      </div>
      <h1 className="as">
        #Build By:-
        <a
          href="https://www.linkedin.com/in/arunkumarp2020"
          target="_blank"
          rel="noreferrer">
          arunkumarp2020
        </a>
      </h1>
    </>
  );
}

