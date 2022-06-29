import React from "react";
import { store } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../Redux/actions";
import { subtractCount } from "../Redux/actions";

const Counter = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.count);
  console.log(store.getState());
  return (
    <div className="counter">
      <h1>Counter : {state}</h1>
      <div>
        <button
          onClick={() => {
            dispatch(addCount(1));
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch(subtractCount(1));
          }}
        >
          Reduce
        </button>
      </div>
    </div>
  );
};

export { Counter };
