import { connect } from 'react-redux';
import { fetchAllWatchlist} from '../../actions/watchlist_actions';
import { createWatchlist, deleteWatchlist} from '../../util/watchlist_api_util';
import WatchlistButton from './watchlist_button';

const mstp = (state) => ({
  watchlists : state.entities.watchlists
})

const mdtp = (dispatch) => ({
  createWatchlist: (watchlist) => (createWatchlist(watchlist)),
  deleteWatchlist: (watchlist_id) => (deleteWatchlist(watchlist_id)),
  fetchAllWatchlist: () => dispatch(fetchAllWatchlist()),
})

export default connect(
  null,
  mdtp
)(WatchlistButton)