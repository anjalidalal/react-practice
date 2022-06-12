import React, { useEffect, useState } from "react";

const Counter = ({initialTime, endTime}) => {
  const [counter, setCounter] = useState(initialTime);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((prev) => {
        if (prev !== endTime) {
          return prev + 1;
        }
        clearInterval(id);
        return prev;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default Counter;
