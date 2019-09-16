import { combineReducers } from "redux";
import stocksDataReducer from "./stocks_data_reducer";
import stocksListingReducer from "./stock_listing_reducer";

const stocksReducer = combineReducers({
  currentStock: stocksDataReducer,
  allStocks: stocksListingReducer
});

export default stocksReducer;
