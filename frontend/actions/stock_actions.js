import * as StockAPIUtil from "../util/stock_api_util";

export const RECEIVE_STOCK_PAST_DATA = "RECEIVE_STOCK_PAST_DATA";
export const RECEIVE_COMPANY_INFO = "RECEIVE_COMPANY_INFO";



export const receiveStockPastData = (payload) => ({
  type: RECEIVE_STOCK_PAST_DATA,
  payload
  //stock maybe replaced with replaced with intraday
  // historical, ticker
}) 

export const receiveCompanyInfo = (payload) => ({
  type: RECEIVE_COMPANY_INFO,
  payload
}) 

export const fetchStockPastData = (ticker, time) => dispatch => (
  StockAPIUtil.fetchStockPastData(ticker, time).then(
    payload => (dispatch(receiveStockPastData(payload))))
)

export const fetchCompanyInfo = (ticker) => dispatch => (
  StockAPIUtil.fetchCompanyInfo(ticker).then(
    payload => (dispatch(receiveCompanyInfo(payload))))
)
