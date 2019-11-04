import {
  RECEIVE_TRANSACTIONS
} from '../actions/transaction_actions';
import merge from 'lodash/merge';


const TransactionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type){
    case RECEIVE_TRANSACTIONS:
      return merge({}, action.transactions)
    default:
      return oldState;
  }

}

export default TransactionsReducer;