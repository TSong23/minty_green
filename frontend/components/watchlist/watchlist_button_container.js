import { connect } from 'react-redux';

import {createWatchlist, deleteWatchlist} from '../../actions/watchlist_actions';

const mstp = (state) => ({
  watchlistItems : state.entities.watchlists
})

const mdtp = (dispatch) => ({
  createWatchlist: (stock_id) => dispatch(createWatchlist(stock_id)),



})

export default connect(
  mstp,
  mdtp
)(WatchItemButton)