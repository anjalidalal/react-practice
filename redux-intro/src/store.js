import { combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import { reducer } from "./Todo/reducer";
import { authReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: reducer,
});

const logger = (state) => (next) => (action) => {
  console.log("Dispatching an action", action, next, state);
  const val = next(action);
  console.log("Existing logger");
  return val;
};

const logger2 = (state) => (next) => (action) => {
  console.log("Dispatching an action from logger 2", state, next, action);
  const val = next(action);
  console.log("Existing logger 2");
  return val;
};

export const store = createStore(
  rootReducer,
  applyMiddleware(logger, logger2)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
