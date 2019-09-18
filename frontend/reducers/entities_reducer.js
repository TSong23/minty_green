
import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import stocksReducer from "./stocks/stocks_reducer";
import watchlistsReducer from "./watchlist/watchlist_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  stocks: stocksReducer,
  watchlists: watchlistsReducer
});

export default entitiesReducer;

