import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST } from "./actionTypes";

export const loginRequest = (token) => {
  return {
    type: LOGIN_REQUEST,
    payload: token,
  };
};
export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailed = (token) => {
  return {
    type: LOGIN_FAILED,
    payload: token,
  };
};
export const loginUser = () => {
  return {};
};
