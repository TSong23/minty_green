json.stock do
  json.partial!  '/api/stocks/stock', bench: @bench 
end