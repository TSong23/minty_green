import {connect} from 'react-redux';
import OrderForm from './order_form';

import {fetchTransactions , createTransactions} from '../../actions/transaction_actions';


const mstp = (state, ownProps) => {

  let shares;
  if (state.entities.users.ownedStocks){
    shares = state.entities.users.ownedStocks[ownProps.currentStockId]
  }
  return {
    shares,
    cash: state.entities.users.cash
  }
}

const mdtp = dispatch => ({
  fetchTransactions : () => dispatch(fetchTransactions()),
  createTransactions : (transaction) => dispatch(createTransactions(transaction))
})


export default connect(
  mstp,
  mdtp
)(OrderForm);