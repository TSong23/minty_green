export const fetchWatchlistItems = (listId) => (
  $.ajax({
    method: "GET",
    url: 'api/watchlist_items',
    data: {listId}
  })
)

export const createWatchlistItem = (watchlistItem) => (
  $.ajax({
    method: "POST",
    url: 'api/watchlist_items',
    data: {watchlistItem}
  })
)

export const deleteWatchlistItem = (watchlistItemId) => (
  $.ajax({
    method: "DELETE",
    url: `api/watchlist_items/${watchlistItemId}`
  })
)

