import * as StockAPIUtil from "../util/stock_api_util";

export const RECEIVE_STOCK_PAST_DATA = "RECEIVE_STOCK_PAST_DATA";
export const RECEIVE_COMPANY_INFO = "RECEIVE_COMPANY_INFO";
export const RECEIVE_STOCK_INTRADAY = "RECEIVE_STOCK_INTRADAY";
export const RECEIVE_STOCK_LISTING = "RECEIVE_STOCK_LISTING";
export const RECEIVE_STOCK_FOR_STORE = "RECEIVE_STOCK_FOR_STORE";



export const receiveStockPastData = (payload, ticker) => ({
  type: RECEIVE_STOCK_PAST_DATA,
  payload,
  ticker
  //stock maybe replaced with replaced with intraday
  // historical, ticker
}) 

export const receiveCompanyInfo = (payload, ticker) => ({
  type: RECEIVE_COMPANY_INFO,
  payload, 
  ticker
}) 

export const receiveStockIntraday = (payload, ticker) => ({
  type: RECEIVE_STOCK_INTRADAY,
  payload,
  ticker
}) 

export const receiveStockListing = (payload) => ({
  type: RECEIVE_STOCK_LISTING,
  payload
}) 

export const receiveStockForStore = (payload) => ({
  type: RECEIVE_STOCK_FOR_STORE,
  payload
}) 


export const fetchStockPastData = (ticker, time) => dispatch => (
  StockAPIUtil.fetchStockPastData(ticker, time).then(
    payload => (dispatch(receiveStockPastData(payload, ticker))))
)

export const fetchCompanyInfo = (ticker) => dispatch => (
  StockAPIUtil.fetchCompanyInfo(ticker).then(
    payload => (dispatch(receiveCompanyInfo(payload, ticker))))
)

export const fetchStockIntraday = (ticker) => dispatch => (
  StockAPIUtil.fetchStockIntraday(ticker).then(
    payload => (dispatch(receiveStockIntraday(payload, ticker))))
)

export const fetchStockAllListing = () => dispatch => (
  StockAPIUtil.fetchStockAllListing().then(
    payload => (dispatch(receiveStockListing(payload))))
)

// export const fetchStockForStore = () => dispatch => (
//   StockAPIUtil.fetchStockAllListing().then(
//     payload => (dispatch(receiveStockForStore(payload))))
// )

export const fetchStockName = (ticker) => (
  StockAPIUtil.fetchStockName(ticker).then(
    payload => {return(payload)})
)


