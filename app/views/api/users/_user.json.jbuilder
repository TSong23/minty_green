
json.extract! user, :id, :username
json.ownedStocks user.all_owned_stock_hash
json.cash user.account_balance