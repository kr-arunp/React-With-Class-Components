import React, { useState, useEffect, useRef } from "react";

const HookTimer = () => {
  const [Timer, setTimer] = useState(0);
  const IntervalRef = useRef(null);
  useEffect(() => {
    IntervalRef.current = setInterval(() => {
      setTimer((Timer) => Timer + 1);
    }, 1000);
    return () => clearInterval(IntervalRef.current);
  }, []);

  return (
    <div>
      <h1 style={{ display: "inline" }}>Timer :{Timer}</h1>
      <br />
      <button onClick={() => clearInterval(IntervalRef.current)}>
        Clear Timer
      </button>
      <br />
      {/* <button onClick={()=>setTimer()}>
          Re-start
        </button> */}
    </div>
  );
};

export default HookTimer;
