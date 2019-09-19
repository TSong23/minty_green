import {
  RECEIVE_WATCHITEMS,
  RECEIVE_WATCHITEM,
  REMOVE_WATCHITEM
} from '../../actions/watchlistitems_actions';

import merge from 'lodash/merge';

const WatchlistItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type){
    case RECEIVE_WATCHITEMS:
      return merge({}, action.watchItems);
    case RECEIVE_WATCHITEM:
      return merge({}, oldState, { [action.watchItem.id]: action.watchItem })
    case REMOVE_WATCHITEM:
      let newState = merge({}, oldState);
      delete newState[action.watchItemId];
      return newState;
    default:
      return oldState;
  }
}

export default WatchlistItemsReducer;