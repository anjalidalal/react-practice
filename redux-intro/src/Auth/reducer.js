import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST } from "./actionTypes";
import { loadData, saveData } from "../localstorege";

const token = loadData("token");

const initState = {
  isAuth: token ? true : false,
  token: token || "",
  isError: false,
  isLoading: true,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
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
        isError: true,
      };
    default:
      return state;
  }
};
