@watchlist_items.each do |watchlistitem|
  json.set! watchlistitem.id do 
    json.partial! 'watchlistitem', watchlistitem: watchlistitem 
  end
end