import * as TransactionApiUtil from '../util/transaction_api_util';


export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";


export const fetchTransactions = () => dispatch => (
  TransactionApiUtil.fetchTransactions().then(
    transactions => dispatch(receiveTransactions(transactions))
  )
)

const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
})

