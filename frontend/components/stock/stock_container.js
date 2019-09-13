import { connect } from 'react-redux';
import {fetchStock} from '../../actions/stock_actions';

import stock from './stock';

const mstp = (state) => ({
  stock_data: state.entities.stocks
  //later on, this will send the ticker, date range information
  // to properly render the chart
})

const dstp = (dispatch) => ({
  fetchStock: (ticker) => dispatch(fetchStock(ticker))
})

export default connect(
  mstp,
  dstp
)(stock)