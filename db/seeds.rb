# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Stock.destroy_all

sp500_list_string = File.read("#{Rails.root}/db/SP500List.csv")

def read_stocks(stock_str)
    stock_str.split("\n")
end  

def make_stock_entry(stock_arr)
  stock_entry = []
  stock_arr.each do |stock| 
    stock_entry.push({
      ticker: (stock.split(",")[0]).gsub('"',''),
      name: (stock.split(",")[1]).gsub('"','')
      }) 
  end
  stock_entry
end

stock_obj = make_stock_entry(read_stocks(sp500_list_string));

Stock.create(stock_obj)

#stock
# Stock.destroy_all
# stock1 = Stock.create(ticker: "MSFT", name: "Microsoft Corp")
# stock2 = Stock.create(ticker: "AMZN", name: "Amazon")
# stock3 = Stock.create(ticker: "AAPL", name: "Apple")
# stock4 = Stock.create(ticker: "GOOG", name: "Google")
# stock5 = Stock.create(ticker: "BRK.B", name: "Buffet")
# stock6 = Stock.create(ticker: "FB", name: "Facebook")
# stock7 = Stock.create(ticker: "V", name: "Visa")
# stock8 = Stock.create(ticker: "JNJ", name: "Johnson and Johnson")
# stock9 = Stock.create(ticker: "JPM", name: "JPMorgan and Chase")


# #user
User.destroy_all
user1 = User.create(username: "demo", password:"123456")
user2 = User.create(username: "taehoon", password:"123456")
user3 = User.create(username: "alex", password:"123456")


#watchlist
Watchlist.destroy_all
wl1 = Watchlist.create(user_id: user1.id)
wl2 = Watchlist.create(user_id: user1.id)
wl3 = Watchlist.create(user_id: user2.id)
wl4 = Watchlist.create(user_id: user2.id)
wl5 = Watchlist.create(user_id: user3.id)
wl6 = Watchlist.create(user_id: user3.id)

#watchlist items
# WatchlistItem.destroy_all
WatchlistItem.create(watchlist_id: wl1.id, stock_id: 1)
WatchlistItem.create(watchlist_id: wl1.id, stock_id: 1)
WatchlistItem.create(watchlist_id: wl2.id, stock_id: 1)
WatchlistItem.create(watchlist_id: wl2.id, stock_id: 1)
WatchlistItem.create(watchlist_id: wl3.id, stock_id: 1)
WatchlistItem.create(watchlist_id: wl3.id, stock_id: 1)
WatchlistItem.create(watchlist_id: wl4.id, stock_id: 1)
WatchlistItem.create(watchlist_id: wl4.id, stock_id: 1)
WatchlistItem.create(watchlist_id: wl5.id, stock_id: 1)
WatchlistItem.create(watchlist_id: wl5.id, stock_id: 1)
WatchlistItem.create(watchlist_id: wl6.id, stock_id: 1)
WatchlistItem.create(watchlist_id: wl6.id, stock_id: 1)