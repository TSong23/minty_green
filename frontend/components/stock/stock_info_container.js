import { connect } from 'react-redux';
import { fetchCompanyInfo } from '../../actions/stock_actions';

import StockInfo from './stock_info';

const mstp = (state) => ({
  //later on, this will send the ticker, date range information
  // to properly render the chart
  info: state.entities.stocks.info

})

const dstp = (dispatch) => ({
  fetchCompanyInfo: (ticker) => dispatch(fetchCompanyInfo(ticker))
})

export default connect(
  mstp,
  dstp
)(StockInfo)