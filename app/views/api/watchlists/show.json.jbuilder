json.stock do
  json.partial!  '/api/stocks/watchlist', watchlist: @watchlist
end