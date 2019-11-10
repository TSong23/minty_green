import { connect } from 'react-redux';
import PortfolioChart  from './portfolio_chart';

import { fetchTransactions } from '../../actions/transaction_actions';

const mstp = ({entities}) => ({
  transactions : entities.transactions
})

const mdtp = dispatch => ({
  fetchTransactions : () => dispatch(fetchTransactions())
})

export default connect(
  mstp,
  mdtp
)(PortfolioChart)