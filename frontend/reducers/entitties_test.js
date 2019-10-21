
import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import stocksReducer from "./stocks/stock_test";
import watchlistsReducer from "./watchlist/watchlist_reducer";
import watchlist_items_Reducer from './watchlist/watchlistitems_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  stocks: stocksReducer,
  watchlists: watchlistsReducer,
  watchlist_items: watchlist_items_Reducer
});

export default entitiesReducer;
