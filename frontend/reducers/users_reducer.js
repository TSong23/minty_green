import { RECEIVE_CURRENT_USER } from "../actions/session_actions"; 
import { RECEIVE_DEPOSIT } from "../actions/deposit_actions";

const usersReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER: 
      // return Object.assign({},state, {[action.currentUser.id]: action.currentUser})
      debugger
      return Object.assign({}, state,  action.currentUser )
    case RECEIVE_DEPOSIT: 
      // let cash_slice = Object.assign({}, state[action.currentUser.id] , {cash : payload.cash} )
      return Object.assign({}, state, action.user)
    default:
      return state
  }
}

export default usersReducer;