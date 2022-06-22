import { createStoreHook } from "react-redux";
import { reducer } from "./reducer";

export const store = createStoreHook(reducer);
