import { 
  RECEIVE_STOCK_PAST_DATA,
  RECEIVE_COMPANY_INFO } from '../actions/stock_actions';

const stocksReducer = (
  state={ 
    info:{},
    historical:{},
    intraday:{}
  },
  action) => {
  
  Object.freeze(state);
  //state will be stocks slice of state
  // payload is data from ajax. payload can be info, historical, etc
  switch(action.type){
    
    case RECEIVE_STOCK_PAST_DATA:
      // modify stocks.hist slice 
      let hist_slice = Object.assign({},state.historical,action.payload);
      // now modify the stocks_slice
      return Object.assign({}, state, {historical: hist_slice})

    case RECEIVE_COMPANY_INFO:
      let info_slice = Object.assign({}, state.info, action.payload);
      return Object.assign({}, state, { info: info_slice })
    default:
      return state
  }
}
export default stocksReducer;


// let state1 = {
//   info: {},
//   historical: {}
// }

// let payload = { 0: { price: 100 }, 1: { price: 200 } }

// let obj1 = Object.assign({}, state1.historical, payload)
// console.log(obj1)

// let obj2 = Object.assign({}, state1, { historical: obj1 })

// console.log(obj2)

// state = {
//   entities:{
//     stocks:{
//       info: {},
//       historical:{},
//       intraday:{}
//     }
//   }
// }





