import { connect } from 'react-redux';
import WatchlistItem from './watchlist_item';

import { deleteWatchlistItem, 
        createWatchlistItem, 
        fetchWatchlistItems} 
from '../../actions/watchlistitems_actions';

const mstp = ({ entities: {watchlist_items}}) => ({
  watchlist_items
})

const mdtp = dispatch => ({
  deleteWatchlistItem: (watchitemId) => dispatch(deleteWatchlistItem(watchitemId)),
  createWatchlistItem: (watchItem) => dispatch(createWatchlistItem(watchItem)),
  fetchWatchlistItems: () => dispatch(fetchWatchlistItems())
})

export default connect(
  mstp,
  mdtp
)(WatchlistItem)