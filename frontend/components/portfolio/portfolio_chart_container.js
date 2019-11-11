import { connect } from 'react-redux';
import PortfolioChart  from './portfolio_chart';

import { fetchTransactions } from '../../actions/transaction_actions';
import { fetchStockAllListing } from '../../actions/stock_actions';


const mstp = ({entities}) => ({
  ownedStocks : entities.users.ownedStocks
})

const mdtp = dispatch => ({
  fetchTransactions : () => dispatch(fetchTransactions()),
  fetchStockAllListing : () => dispatch(fetchStockAllListing())
})

export default connect(
  mstp,
  mdtp
)(PortfolioChart)