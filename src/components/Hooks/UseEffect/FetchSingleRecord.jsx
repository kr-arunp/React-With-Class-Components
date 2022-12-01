import React, { useState, useEffect } from "react";
// @ts-ignore
import axios from "axios";
import "../Hooks CSS/ToDo.css";
const FetchSingleRecord = () => {
  const [Input, setInput] = useState("");
  const [CurrentPost, setCurrentPost] = useState({});
  const [URL,setURL]=useState(`https://jsonplaceholder.typicode.com/posts/`);
    const EnterHandler = (e) => {
      if (e.keyCode === 13) {
         SetPost()
      }
    };
   const clickHandler = () => {
      SetPost()
    }
    const SetPost=()=>{
    console.log("SetPost Function called")
    console.log("SetPost Function called")
    setURL(`https://jsonplaceholder.typicode.com/posts/${Input}`);
  }
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response);
        setCurrentPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [URL]);
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Fetching Single Post from an Api Point</h2>
        <input
          style={{ textAlign: "center" }}
          type="number"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={EnterHandler}
        />
        <button id="btn" onClick={clickHandler}>New Post</button>
        <h4>
          <b>
            {" "}
            <span style={{ color: "red" }}>Input data is:</span> {Input}
          </b>
        </h4>
        <div>
          <h2>
            {" "}
            <span style={{ color: "blue " }}>Post Title</span>:
            {CurrentPost.title}
          </h2>
          <h2>
            <span style={{ color: "yellow" }}>Post Body</span> :
            {CurrentPost.body}
          </h2>
          <h2>
            <span style={{ color: "yellowgreen" }}>Post UserId:</span>{" "}
            {CurrentPost.id}
          </h2>
        </div>
      </div>
    </>
  );
};

export default FetchSingleRecord;
