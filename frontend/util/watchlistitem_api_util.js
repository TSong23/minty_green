export const fetchWatchlistItems = () => (
  $.ajax({
    method: "GET",
    url: 'api/watchlists_items'
  })
)

export const createWatchlistItem = (watchlistItem) => (
  $.ajax({
    method: "POST",
    url: 'api/watchlists_items',
    data: {watchlistItem}
  })
)

export const deleteWatchlistItem = (watchlistItemId) => (
  $.ajax({
    method: "DELETE",
    url: `api/watchlists_items/${watchlistItemId}`
  })
)

