import React, { createRef } from "react";
export default class Ref extends React.Component {
  interval;
  constructor(props) {
    super(props);
    this.state = {
      Timer: 0,
      time:0
    };
    this.myRef = createRef();
  }
  componentDidMount() {
    console.log(this.myRef);
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ Timer: this.state.Timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  ClickHandler = () => {
    console.log(this.myRef.current.value);
    this.myRef.current.style.color = "red";
    this.myRef.current.style.backgroundColor = "gold";
    this.myRef.current.style.fontSize = "40px";
    this.myRef.current.style.fontFamily = "monospace";
    this.myRef.current.style.padding = "15px";
    this.myRef.current.style.marginBottom = "15px";
  };

  ResetHandler = () => {
    this.setState({ Timer: 0 });
    this.componentDidMount();
  };

  stopHandler = () => {
    clearInterval(this.interval);
  };
  ContinueHandler=() => {
     
  
  
  }

  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Introduction to React Refs</h1>
        <p style={{ textAlign: "center" }}>
          <input type="text" ref={this.myRef} />
          <button
            style={{ textAlign: "center" }}
            onClick={() => this.ClickHandler()}
          >
            Click Here
          </button>
        </p>

        <div style={{ textAlign: "center" }}>
          <h1>This is an Example of Timer</h1>
          <div>
            <button
              onClick={() => this.ResetHandler()}
              style={{ marginLeft: "19px" }}
            >
              Re-Start
            </button>
            <button
              onClick={() => this.ContinueHandler()}
              style={{ marginLeft: "19px" }}
            >
              Continue
            </button>
          </div>
          <h3>Current Timer: {this.state.Timer}</h3>

          <span style={{ marginLeft: "19px" }}>
            <button>Pause</button>
          </span>
          <span style={{ marginLeft: "19px" }}>
            <button onClick={() => this.stopHandler()}>Stop</button>
          </span>
        </div>
      </>
    );
  }
}
