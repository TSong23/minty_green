json.set! @watchlist_item.id do 
  json.partial! 'watchlistitem', watchlistitem: @watchlist_item 
end