import { combineReducers } from "redux";
import stocksDataReducer from "./stocks_data_reducer";
import stocksListingReducer from "./stock_listing_reducer";
import stocksTestReducer from "./stock_test";

const stocksReducer = combineReducers({
  stocksTestReducer,
  allStocks: stocksListingReducer
});

export default stocksReducer;
