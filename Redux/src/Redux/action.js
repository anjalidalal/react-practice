import { ADD_COUNT } from "./actionTypes";
import { SUB_COUNT } from "./actionTypes";

export const addCount = (data) => {
  return {
    type: ADD_COUNT,
    payload: data,
  };
};

export const subCount = (data) => {
  return {
    type: SUB_COUNT,
    payload: data,
  };
};
