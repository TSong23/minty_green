import { connect } from 'react-redux';
import WatchItemButton from './watchlistitem_button';
import {deleteWatchlistItem, createWatchlistItem} from '../../actions/watchlistitems_actions';


const mstp = (state) => ({
  watchlistItems: state.entities.watchlist_items,
  watchlists: state.entities.watchlists,
  allStocks: state.entities.stocks.allStocks
})

const mdtp = (dispatch) => ({
  deleteWatchlistItem: (watchItemId) => dispatch(deleteWatchlistItem(watchItemId)),
  createWatchlistItem: (watchItem) => dispatch(createWatchlistItem(watchItem))
})

export default connect(
  mstp,
  mdtp
)(WatchItemButton)
