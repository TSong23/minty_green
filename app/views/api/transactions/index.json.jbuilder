@transactions.each do |transaction|
  json.set! transaction.id do 
    json.extract! transaction, :id, :stock_id, :num_shares, :price, :order_type
  end
end