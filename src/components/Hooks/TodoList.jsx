import React, { useState } from "react";
import './Hooks CSS/ToDo.css'
const TodoList = () => {
  const [InputText, setInputText] = useState("");
  const [ListTask, setListTask] = useState([]);
  const SubmitHandler = (e) => {
    e.preventDefault();
    setListTask((prevItem) => {
      setInputText("");
      return [...prevItem, InputText];
    });
   
  };
  const ChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  const ClearList = () => {
    setListTask((prevItem) => {
      return [];
    });
  };

  const EnterKeyHit = (e) => {
    if (e.keyCode === 13) {
      SubmitHandler();
    }
  };

  return (
    <>
      <div className="container">
        <div className="Main">
          <div className="Todo-header">
            <h1 className="My-Heading">⏳MyToDo List⏲️</h1>
          </div>
          <div className="Todo-list">
            <form onSubmit={SubmitHandler}>
              <input
                type="text"
                // autoFocus={true}
                name="MyTask"
                id="Task"
                // onKeyDown={EnterKeyHit}
                placeholder="Enter New Task"
                value={InputText}
                onChange={ChangeHandler}
              />
              <button type="submit" id="btn">
                Add New Task
              </button>
            </form>
            {/* <input
              type="text"
              // autoFocus={true}
              name="MyTask"
              id="Task"
              onKeyDown={EnterKeyHit}
              placeholder="Enter New Task"
              value={InputText}
              onChange={ChangeHandler}
            />
            <button onClick={SubmitHandler} id="btn">
              Add New Task
            </button> */}
          </div>
        </div>
        <div className="MyList">
          <span>
            <h1 style={{ marginBottom: "15px", color: "goldenrod" }}>
              My Tasks Are:
              {/* <button onClick={ClearList} id='btn1'>Clear List</button> */}
            </h1>
          </span>
          <ul>
            {ListTask.map((item, i) => {
              return (
                <li key={i}>
                  {item}
                  <hr color="green" style={{ marginTop: "15px" }} />
                </li>
              );
            })}
            <hr color="blue" style={{ marginTop: "15px" }} />

            <button onClick={ClearList} id="btn1">
              Clear List ⬆️
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
export default TodoList;
