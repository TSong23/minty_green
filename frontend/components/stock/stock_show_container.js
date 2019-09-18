import { connect } from 'react-redux';
import StockShow from './stock_show';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { fetchStockPastData, fetchCompanyInfo, fetchStockIntraday } from '../../actions/stock_actions';


// const mstp = ({ entities }) => ({
//   entities
// })

const mdtp = () => ({
  logout: () => dispatch(logout()),
  // fetchStockPastData: (ticker, time) => dispatch(fetchStockPastData(ticker, time)),
  // fetchStockIntraday: (ticker) => dispatch(fetchStockIntraday(ticker)),
  // fetchCompanyInfo: (ticker) => dispatch(fetchCompanyInfo(ticker))  
})

export default connect(
  null,
  mdtp
)(StockShow);

