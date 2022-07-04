import { LOGIN_SUCCESS, LOGIN_FAILED } from "./actionTypes";
import { loadData, saveData } from "../localstorege";

const token = loadData("token");

const initState = {
  isAuth: token ? true : false,
  token: token || "",
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      saveData("token", payload);
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
