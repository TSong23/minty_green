import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from "./store/store";
import * as APIUtil from './util/session_api_util';

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


  ReactDOM.render(
    <Root store={store}/>, root);
});