import { connect } from 'react-redux';
import { fetchStockPastData, fetchCompanyInfo} from '../../actions/stock_actions';

import StockChart from './stock_chart';

const mstp = (state) => ({
  //later on, this will send the ticker, date range information
  // to properly render the chart

  historical: state.entities.stocks.historical,
  info: state.entities.stocks.info

})

const dstp = (dispatch) => ({
  fetchStockPastData: (ticker, time) => dispatch(fetchStockPastData(ticker, time)),
  fetchCompanyInfo: (ticker) => dispatch(fetchCompanyInfo(ticker))
})

export default connect(
  mstp,
  dstp
)(StockChart)