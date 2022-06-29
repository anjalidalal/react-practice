import { ADD_COUNT, SUB_COUNT } from "./actionTypes";

const initState = {
  count: 1,
};

export const reducer = (state = initState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + payload,
      };
    case SUB_COUNT:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return { ...state };
  }
};
