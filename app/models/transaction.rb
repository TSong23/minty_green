class Transaction < ApplicationRecord
  validates :user_id, :stock_id, :num_shares, :price, :type, presence: true
  validates :type, inclusion: { in: %w(BUY SELL),
             message: "%{value} is not a valid order type" }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :Watchlist

  belongs_to :stock,
    foreign_key: :stock_id,
    class_name: :Stock

  def purchase
    
  end

  def sell

  end
   
  
end
