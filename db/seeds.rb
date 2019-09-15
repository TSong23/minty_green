# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Stock.destroy_all
User.destroy_all

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

User.create(username: "demo", password:"123456")