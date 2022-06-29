import React from "react";
import { store } from "../Redux/store";

const Counter = () => {
  console.log(store.getState());
  return (
    <div>
      <h1>Counter :</h1>
      <button>Add</button>
      <button>Reduce</button>
    </div>
  );
};

export { Counter };
