import { combineReducers, createStore } from "redux";
import { reducer } from "./Todo/reducer";
import { authReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: reducer,
});

export const store = createStore(rootReducer);
