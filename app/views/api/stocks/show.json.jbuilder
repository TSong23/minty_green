json.stock do
  json.partial!  '/api/stocks/stock', stock: @stock
end