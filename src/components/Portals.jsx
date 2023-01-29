/** @format */

import React, { useState } from "react";
import ReactDOM from "react-dom";
import GreetingApp from "./GreetingApp";
import { PersonalInfo } from "./Hooks/PersonalInfo,";
import TodoList from "./Hooks/TodoList";

let modal_root = document.getElementById("modal-root");
let ope=false;
const Portals = () => {
  const [open, setOpen] = useState(ope);
  return (
    <>
      <div className="main-container">
        <div
     style={{ background: 'white', margin: 16, padding: 16 }}
        >
          <button id="btn" onClick={() => setOpen(!open)}>
            {open ? "Hide" : "show"}
          </button>
        </div>
        {open && <Models op={open} />}
      </div>
    </>
  );
};
export default Portals;

let Models = ({open}) => {
const [close,setClose]=useState(true)
	let CloseModals=() => {
		ope=close;
	}
  return ReactDOM.createPortal(
    <div
    style={{
        background: 'rgba(0,0,0,0.7)',
        height: '100vh',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100vw',
      }}
    >
		  <TodoList />
		  <button  onClick={()=>CloseModals}>Close Model</button>
    </div>,
    modal_root
  );
};
