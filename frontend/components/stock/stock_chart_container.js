import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStockPastData, fetchCompanyInfo, fetchStockIntraday} from '../../actions/stock_actions';

import StockChart from './stock_chart';

const mstp = ({entities: { stocks }}, ownProps) => ({
  // get ticker and send only necessary slice of state
  allStockInfo: stocks[ownProps.match.params.ticker],
  // historical: currentStock.historical,
  // info: currentStock.info
})

const mdtp = (dispatch) => ({
  // fetchStockPastData: (ticker, time) => dispatch(fetchStockPastData(ticker, time)),
  fetchStockIntraday: (ticker) => dispatch(fetchStockIntraday(ticker)),  
  // fetchCompanyInfo: (ticker) => dispatch(fetchCompanyInfo(ticker))
})

export default withRouter(connect(
  mstp,
  mdtp
)(StockChart))