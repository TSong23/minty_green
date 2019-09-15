import { combineReducers } from "redux";
import stocksDataReducer from "./stocks_data_reducer";

const stocksReducer = combineReducers({
  currentStock: stocksDataReducer,
  
});

export default stocksReducer;
