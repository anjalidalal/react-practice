import { LOGIN_SUCCESS, LOGIN_FAILED } from "./actionTypes";

const initState = {
  isAuth: false,
  token: "",
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    default:
      return state;
  }
};
