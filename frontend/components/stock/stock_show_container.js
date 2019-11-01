import { connect } from 'react-redux';
import StockShow from './stock_show';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { fetchStockPastData, 
        fetchCompanyInfo, 
        fetchStockIntraday,
        fetchStockAllListing } from '../../actions/stock_actions';
import { fetchAllWatchlist } from '../../actions/watchlist_actions';


const mstp = (state, ownProps) => ({
  stockAllInfo: state.entities.stocks[ownProps.match.params.ticker],
  watchlists : state.entities.watchlists
})

const mdtp = () => ({
  logout: () => dispatch(logout()),
  fetchStockAllListing : () => dispatch(fetchStockAllListing()),
  fetchStockIntraday: (ticker) => dispatch(fetchStockIntraday(ticker)),
  // fetchCompanyInfo: (ticker) => dispatch(fetchCompanyInfo(ticker)),
  fetchStockPastData: (ticker, time) => dispatch(fetchStockPastData(ticker, time)),
  fetchAllWatchlist: () => dispatch(fetchAllWatchlist()),
})

export default withRouter(connect(
  mstp,
  mdtp
)(StockShow));

