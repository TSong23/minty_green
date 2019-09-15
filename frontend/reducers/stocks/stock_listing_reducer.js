import {
  RECEIVE_STOCK_LISTING
} from '../../actions/stock_actions';

const stocksListingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_STOCK_LISTING:
      return Object.assign({}, action.payload)
    default:
      return state
  }
}

export default stocksListingReducer