import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from "./store/store";
import * as SessionActions from './actions/session_actions';
import * as StockActions from './actions/stock_actions';
import {fetchStockName} from './util/stock_api_util';
import {fetchAllWatchlist} from './util/watchlist_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //test begin
  window.signup = SessionActions.signup;
  window.login = SessionActions.login; 
  window.logout  = SessionActions.logout;
  window.fetchCompanyInfo = StockActions.fetchCompanyInfo;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchStockName = fetchStockName;
  window.fetchAllWatchlist = fetchAllWatchlist;
  // test end  


  ReactDOM.render(
    <Root store={store}/>, root);
});