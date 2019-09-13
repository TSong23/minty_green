import { RECEIVE_STOCK_DATA } from '../actions/stock_actions';

const stocksReducer = (state={},action) => {
  Object.freeze(state);
  switch(action.type){
    
    case RECEIVE_STOCK_DATA:
      return Object.assign({},state,action.payload)
      //action.stock maybe comprised with other keys
    default:
      return state
  }
}

export default stocksReducer;

