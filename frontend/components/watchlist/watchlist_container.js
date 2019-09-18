import { connect } from 'react-redux';
import Watchlist from './watchlist';
import { 
  fetchAllWatchlist,
  fetchWatchlist,
  createWatchlist,
  updateWatchlist,
  deleteWatchlist
 } from '../../actions/watchlist_actions';

const mstp = ({ entities: { watchlists} }) => ({
  watchlists
})

const mdtp = dispatch => ({
  fetchAllWatchlist: () => dispatch(fetchAllWatchlist()),
  fetchWatchlist: (id) => dispatch(fetchWatchlist(id)),
  createWatchlist: (watchlist) => dispatch(createWatchlist(watchlist)),
  updateWatchlist: (watchlist) => dispatch(updateWatchlist(watchlist)),
  deleteWatchlist: (id) => dispatch(deleteWatchlist(id))
})

export default connect(
  mstp,
  mdtp
)(Watchlist)