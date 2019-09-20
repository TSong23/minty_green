import * as WatchItemsApiUtil from '../util/watchlistitem_api_util';

export const RECEIVE_WATCHITEMS = "RECEIVE_WATCHITEMS";
export const RECEIVE_WATCHITEM = "RECEIVE_WATCHITEM";
export const REMOVE_WATCHITEM = "REMOVE_WATCHITEM ";

export const deleteWatchlistItem = (watchItemId) => dispatch => (
  WatchItemsApiUtil.deleteWatchlistItem(watchItemId).then(
    watchlistItem => dispatch(removeWatchItem(watchItemId))
  )
);

export const createWatchlistItem = (watchItem) => dispatch => (
  WatchItemsApiUtil.createWatchlistItem(watchItem).then(
    watchItem => dispatch(receiveWatchItem(watchItem))
  )
);

export const fetchWatchlistItems = (listId) => dispatch => (
  WatchItemsApiUtil.fetchWatchlistItems(listId).then(
    watchItems => dispatch(receiveWatchItems(watchItems))
  )
);

const removeWatchItem = watchItemId => ({
  type: REMOVE_WATCHITEM,
  watchItemId
});

const receiveWatchItem = watchItem => ({
  type: RECEIVE_WATCHITEM,
  watchItem
});

const receiveWatchItems = watchItems => ({
  type: RECEIVE_WATCHITEMS,
  watchItems
});


