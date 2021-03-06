import {
  RECEIVE_STOCK_PAST_DATA,
  RECEIVE_COMPANY_INFO,
  RECEIVE_STOCK_INTRADAY,
  RECEIVE_STOCK_LISTING,
  RECEIVE_STOCK_FOR_STORE
} from '../../actions/stock_actions';
import {merge} from 'lodash';

const stocksTestReducer = ( state = {}, action) => {

  Object.freeze(state);
  //state will be stocks slice of state
  // payload is data from ajax. payload can be info, historical, etc
  switch (action.type) {

    case RECEIVE_STOCK_INTRADAY:
      // modify stocks.hist slice 
      let intra_slice = Object.assign({}, state[action.ticker], {intraday : action.payload} );
      // now modify the stocks_slice
      return merge({}, state, { [action.ticker] : intra_slice });

    case RECEIVE_STOCK_PAST_DATA:
      // modify stocks.hist slice 
      let hist_slice = Object.assign({}, state[action.ticker], { year : action.payload });
      // now modify the stocks_slice
      return merge({}, state, { [action.ticker]: hist_slice });

    case RECEIVE_COMPANY_INFO:
      let info_slice = Object.assign({}, [action.ticker], action.payload);
      return Object.assign({}, state, { [action.ticker] : info_slice });

    case RECEIVE_STOCK_LISTING:
      //this is called whenever home page is mounted
      return merge({}, state, action.payload );

    default:
      return state
  }
}
export default stocksTestReducer;







