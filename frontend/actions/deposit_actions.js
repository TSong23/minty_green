import * as DepositApiUtil from '../util/deposit_api_util';

export const RECEIVE_DEPOSit = "RECEIVE_DEPOSIT";


// deposits should return user's current buying power

export const createDeposit = (deposit) => dispatch => (
  DepositApiUtil.createDeposit(deposit).then(
    msg => dispatch()
  )
)