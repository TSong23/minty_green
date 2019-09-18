import {
  RECEIVE_WATCHLISTS,
  RECEIVE_WATCHLIST,
  REMOVE_WATCHLIST
} from '../../actions/watchlist_actions';
import merge from 'lodash/merge';

const WatchlistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type){
    case RECEIVE_WATCHLISTS:
      return merge({}, action.watchlists);
    case RECEIVE_WATCHLIST:
      return merge({}, oldState, {[action.watchlist.id]: action.watchlist});
    case REMOVE_WATCHLIST:
      let newStart = merge({}, oldState);
      delete newState[action.watchlistId];
      return newState;
    default:
      return oldState;
  }
}

export default WatchlistsReducer;

