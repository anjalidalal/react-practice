import { LOGIN_SUCCESS, LOGIN_FAILED } from "./actionTypes";

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginFailed = (token) => {
  return {
    type: LOGIN_FAILED,
    payload: token,
  };
};
