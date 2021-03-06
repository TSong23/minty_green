import * as TransactionApiUtil from '../util/transaction_api_util';


export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";


export const fetchTransactions = () => dispatch => (
  TransactionApiUtil.fetchTransactions().then(
    transactions => dispatch(receiveTransactions(transactions))
  )
)

export const createTransactions = (transaction) => dispatch => (
  TransactionApiUtil.createTransaction(transaction).then(
    userInfo => dispatch(receiveTransaction(userInfo))
  )
)

export const receiveTransaction = userInfo => ({
  type: RECEIVE_TRANSACTION,
  userInfo
})

export const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
})

