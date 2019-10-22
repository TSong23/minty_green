@stocks.each do |stock|
  json.set! stock.ticker do
    json.partial! 'stock', stock: stock
  end
end