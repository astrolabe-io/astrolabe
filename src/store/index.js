import { configureStore, combineReducers } from "@reduxjs/toolkit";
import persistState from "redux-localstorage";
import themeReducer from "./themeReducer";

export const reducers = combineReducers({
  theme: themeReducer,
});

export default configureStore({
  reducer: reducers,
  enhancers: [persistState()],
});
