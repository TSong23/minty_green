import { RECEIVE_STOCK_DATA } from '../actions/stock_actions';

const stocksReducer = (state={},action) => {
  Object.freeze(state);
  switch(action.type){
    
    case RECEIVE_STOCK_DATA:
      return Object.assign({},state,action.stock)
      //action.stock maybe compromised with other keys
    default:
      return state
  }
}

export default stocksReducer;

