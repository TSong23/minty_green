import * as DepositApiUtil from '../util/deposit_api_util';

export const RECEIVE_DEPOSIT= "RECEIVE_DEPOSIT";


// deposits should return user's current buying power

export const createDeposit = (deposit) => dispatch => (
  DepositApiUtil.createDeposit(deposit).then(
    user => dispatch(receiveDeposit(user))
  )
)

export const receiveDeposit = user => ({
  type : RECEIVE_DEPOSIT,
  user
})