import * as StockAPIUtil from "../util/stock_api_util";

export const RECEIVE_STOCK_DATA = "RECEIVE_STOCK_DATA";

export const receiveStockData = ({stock}) => ({
  type: RECEIVE_STOCK_DATA,
  stock
  //stock maybe replaced with replaced with intraday
  // historical, ticker
}) 

export const fetchStock = id => dispatch => (
  StockAPIUtil.fetchStock(id).then(
    payload => (dispatch(receiveStockData(payload))))
)