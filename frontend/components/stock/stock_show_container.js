import { connect } from 'react-redux';
import StockShow from './stock_show';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { fetchStockPastData, fetchCompanyInfo, fetchStockIntraday } from '../../actions/stock_actions';


const mstp = ( state) => ({
  allStocks: state.entities.stocks.allStocks,
  currentUser: state.entities.users[state.session.id],
  userId: state.session.id
})

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

