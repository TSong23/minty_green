import { connect } from 'react-redux';
import Watchlist from './watchlist';
import { 
  fetchAllWatchlist
  // fetchWatchlist,
  // createWatchlist,
  // updateWatchlist,
  // deleteWatchlist
 } from '../../actions/watchlist_actions';
import { fetchStockAllListing} from '../../actions/stock_actions';



const mstp = ({ entities: { watchlists} }) => ({
  watchlists
})

const mdtp = dispatch => ({
  fetchAllWatchlist: () => dispatch(fetchAllWatchlist()),
  fetchStockAllListing: () => dispatch(fetchStockAllListing())


  // fetchWatchlist: (id) => dispatch(fetchWatchlist(id)),
  // createWatchlist: (watchlist) => dispatch(createWatchlist(watchlist)),
  // updateWatchlist: (watchlist) => dispatch(updateWatchlist(watchlist)),
  // deleteWatchlist: (id) => dispatch(deleteWatchlist(id))
})

export default connect(
  mstp,
  mdtp
)(Watchlist)