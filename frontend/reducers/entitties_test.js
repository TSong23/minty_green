
import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import stocksTestReducer from "./stocks/stock_test";
import watchlistsReducer from "./watchlist/watchlist_reducer";
import watchlist_items_Reducer from './watchlist/watchlistitems_reducer';
import transactionsReducer from './transactions_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  stocks: stocksTestReducer,
  watchlists: watchlistsReducer,
  transactions: transactionsReducer
  // watchlist_items: watchlist_items_Reducer
});

export default entitiesReducer;
