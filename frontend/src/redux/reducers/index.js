import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./authReducers";
import postReducers from "./postReducers";
import updateReducers from "./updateReducers";

// We will have some reducers here
export default combineReducers({
  post: postReducers,
  auth: authReducers,
  update: updateReducers,
});

