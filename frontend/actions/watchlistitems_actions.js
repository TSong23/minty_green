import * as WatchItemsApiUtil from '../util/watchlistitem_api_util';

export const RECEIVE_WATCHITEMS = "RECEIVE_WATCHITEMS";
export const RECEIVE_WATCHITEM = "RECEIVE_WATCHITEM";
export const REMOVE_WATCHITEM = "REMOVE_WATCHITEM ";

export const deleteWatchlistItem = (watchitemId) => dispatch => (
  WatchItemsApiUtil.deleteWatchlistItem().then(
    watchlistItem => dispatch(removeWatchItem(watchitemId))
  )
);

export const createWatchlistItem = (watchItem) => dispatch => (
  WatchItemsApiUtil.createWatchlistItem(watchItem).then(
    watchItem => dispatch(receiveWatchItem(watchItem))
  )
);

export const fetchWatchlistItems = (listId) => dispatch => (
  WatchItemsApiUtil.fetchWatchlistItems(listId).then(
    watchitems => dispatch(receiveWatchItems(watchitems))
  )
);

const removeWatchItem = watchitemId => ({
  type: REMOVE_WATCHITEM,
  watchitemId
});

const receiveWatchItem = watchitem => ({
  type: RECEIVE_WATCHLIST,
  watchitem
});

const receiveWatchItems = watchItems => ({
  type: RECEIVE_WATCHITEMS,
  watchItems
});


