import React from "react";
import ReactDOM from "react-dom";
import * as APIUtil from "./util/session_api_util";
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  //test begin
  window.signup = APIUtil.signup;
  window.login = APIUtil.login; 
  window.logout  = APIUtil.logout

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // test end  


  ReactDOM.render(<h1>Welcome to MintGreen</h1>, root);
});