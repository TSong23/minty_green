import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from "./store/store";
import * as SessionActions from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  //test begin
  window.signup = SessionActions.signup;
  window.login = SessionActions.login; 
  window.logout  = SessionActions.logout

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // test end  


  ReactDOM.render(
    <Root store={store}/>, root);
});