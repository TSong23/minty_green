import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStockPastData, fetchCompanyInfo, fetchStockIntraday} from '../../actions/stock_actions';

import StockChart from './stock_chart';

const mstp = ({entities: { stocks: {currentStock} }}) => ({
  //later on, this will send the ticker, date range information
  // to properly render the chart
  intraday: currentStock.intraday,
  historical: currentStock.historical,
  info: currentStock.info

})

const dstp = (dispatch) => ({
  fetchStockPastData: (ticker, time) => dispatch(fetchStockPastData(ticker, time)),
  fetchStockIntraday: (ticker) => dispatch(fetchStockIntraday(ticker)),  
  fetchCompanyInfo: (ticker) => dispatch(fetchCompanyInfo(ticker))
})

export default withRouter(connect(
  mstp,
  dstp
)(StockChart))