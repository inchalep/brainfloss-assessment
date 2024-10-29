import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
export const rootReducers: any = combineReducers({
  user: userReducer,
});
