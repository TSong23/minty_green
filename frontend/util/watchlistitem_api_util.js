export const fetchWatchlistItems = (listId) => (
  $.ajax({
    method: "GET",
    url: 'api/watchlist_items',
    data: {listId}
  })
)

export const createWatchlistItem = (watchlist_item) => (
  $.ajax({
    method: "POST",
    url: 'api/watchlist_items',
    data: {watchlist_item}
  })
)

export const deleteWatchlistItem = (watchlistItemId) => (
  $.ajax({
    method: "DELETE",
    url: `api/watchlist_items/${watchlistItemId}`
  })
)

