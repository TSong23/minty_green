import { connect } from 'react-redux';
import { fetchCompanyInfo } from '../../actions/stock_actions';

import StockInfo from './stock_info';

const mstp = ({ entities: {stocks: {currentStock}}}) => ({
  //later on, this will send the ticker, date range information
  // to properly render the chart
  info: currentStock.info

})

const dstp = (dispatch) => ({
  fetchCompanyInfo: (ticker) => dispatch(fetchCompanyInfo(ticker))
})

export default connect(
  mstp,
  dstp
)(StockInfo)