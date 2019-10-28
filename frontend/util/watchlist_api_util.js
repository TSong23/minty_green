export const createWatchlist = (watchlist) => (
  $.ajax({
    method: "POST",
    url: "api/watchlists",
    data: {watchlist}
  })
);

export const fetchAllWatchlist = () => (
  $.ajax({
    method: "GET",
    url: 'api/watchlists'
  })
)

// export const fetchWatchlist = (id) => (
//   $.ajax({
//     method: "GET",
//     url: `api/watchlists/${id}`
//   })
// )

// export const updateWatchlist = (watchlist) => (
//   $.ajax({
//     method: "PATCH",
//     url: `api/watchlists/${watchlist.id}`,
//     data: {watchlist}
//   })
// )

export const deleteWatchlist = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/watchlists/${id}`,
  })
)
