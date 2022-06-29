import { ADD_COUNT, SUB_COUNT } from "./actionTypes";

export const addCount = (data) => {
  return {
    type: ADD_COUNT,
    payload: data,
  };
};

export const subtractCount = (data) => {
  return {
    type: SUB_COUNT,
    payload: data,
  };
};
