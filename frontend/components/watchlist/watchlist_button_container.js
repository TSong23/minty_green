import { connect } from 'react-redux';
import { createWatchlist, deleteWatchlist, fetchAllWatchlist} from '../../actions/watchlist_actions';
import WatchlistButton from './watchlist_button';

const mstp = (state) => ({
  watchlists : state.entities.watchlists
})

const mdtp = (dispatch) => ({
  createWatchlist: (watchlist) => dispatch(createWatchlist(watchlist)),
  deleteWatchlist: (watchlist_id) => dispatch(deleteWatchlist(watchlist_id)),
  fetchAllWatchlist: () => dispatch(fetchAllWatchlist()),
})

export default connect(
  mstp,
  mdtp
)(WatchlistButton)