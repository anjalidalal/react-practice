import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    handleStart();
  }, []);

  const handleStart = () => {
    countRef.current = setInterval(() => {
      setTimer((p) => p + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>Timer : {timer}</h1>
      <button
        onClick={() => {
          clearInterval(countRef.current);
          countRef.current = null;
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          if(countRef.current){
            return;
          }
          handleStart();
        }}
      >
        Resume
      </button>
      <button
        onClick={() => {
          setTimer(0);
          clearInterval(countRef.current);
          countRef.current = null;
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default Timer;
