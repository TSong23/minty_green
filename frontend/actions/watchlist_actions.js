import * as WatchlistApiUtil from '../util/watchlist_api_util';

// to minimize rerenders on frontend, import api util directly to watchlist 
// component and save to local state of the component rather than in the global 
// state



export const RECEIVE_WATCHLISTS = "RECEIVE_WATCHLISTS";
export const RECEIVE_WATCHLIST = "RECEIVE_WATCHLIST";
export const REMOVE_WATCHLIST = "REMOVE_WATCHLIST";

export const fetchAllWatchlist = () => dispatch => (
  WatchlistApiUtil.fetchAllWatchlist().then(
    watchlists => dispatch(receiveAllWatchlist(watchlists))
  )
);

// export const fetchWatchlist = (id) => dispatch => (
//   WatchlistApiUtil.fetchWatchlist(id).then(
//     watchlist => dispatch(receiveWatchlist(watchlist))
//   )
// );

export const createWatchlist = (watchlist) => dispatch => (
  WatchlistApiUtil.createWatchlist(watchlist).then(
    watchlists => dispatch(receiveAllWatchlist(watchlists))
  )
);

// export const updateWatchlist = (watchlist) => dispatch => (
//   WatchlistApiUtil.updateWatchlist(watchlist).then(
//     watchlist => dispatch(receiveWatchlist(watchlist))
//   )
// );

export const deleteWatchlist = (watchlistId) => dispatch => (
  WatchlistApiUtil.deleteWatchlist(watchlistId).then(
    watchlists => dispatch(receiveAllWatchlist(watchlists))
  )
);


const receiveAllWatchlist = watchlists => ({
  type: RECEIVE_WATCHLISTS,
  watchlists
});

const receiveWatchlist = watchlist => ({
  type: RECEIVE_WATCHLIST,
  watchlist
});

const removeWatchlist = watchlistId => ({
  type: REMOVE_WATCHLIST,
  watchlistId
});

