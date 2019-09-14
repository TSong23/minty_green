import * as StockAPIUtil from "../util/stock_api_util";

export const RECEIVE_STOCK_DATA = "RECEIVE_STOCK_DATA";

export const receiveStockData = (payload) => ({
  type: RECEIVE_STOCK_DATA,
  payload
  //stock maybe replaced with replaced with intraday
  // historical, ticker
}) 

export const fetchStockPastData = (ticker, time) => dispatch => (
  StockAPIUtil.fetchStockPastData(ticker, time).then(
    payload => (dispatch(receiveStockData(payload))))
)