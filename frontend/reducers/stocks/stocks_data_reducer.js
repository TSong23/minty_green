import { 
  RECEIVE_STOCK_PAST_DATA,
  RECEIVE_COMPANY_INFO,
  RECEIVE_STOCK_INTRADAY } from '../../actions/stock_actions';

const stocksDataReducer = (
  state={ 
    info:{},
    historical:{},
    intraday:{}
  },
  action) => {
  
  Object.freeze(state);
  //state will be stocks slice of state
  // payload is data from ajax. payload can be info, historical, etc
  switch(action.type){

    case RECEIVE_STOCK_INTRADAY:
      // modify stocks.hist slice 
      let intra_slice = Object.assign({}, state.intraday, action.payload);
      // now modify the stocks_slice
      return Object.assign({}, state, { intraday: intra_slice })
    
    case RECEIVE_STOCK_PAST_DATA:
      // modify stocks.hist slice 
      let hist_slice = Object.assign({},action.payload);
      // now modify the stocks_slice
      return Object.assign({}, state, {historical: hist_slice})

    case RECEIVE_COMPANY_INFO:
      let info_slice = Object.assign({}, state.info, action.payload);
      return Object.assign({}, state, { info: info_slice })
    default:
      return state
  }
}
export default stocksDataReducer;







