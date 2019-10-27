# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  stock_id   :integer          not null
#  num_shares :integer          not null
#  price      :float            not null
#  order_type :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Transaction < ApplicationRecord
  validates :user_id, :stock_id, :num_shares, :price, :order_type, presence: true
  validates :order_type, inclusion: { in: %w(BUY SELL),
             message: "%{value} is not a valid order type" }

  validate :enough_money?, :enough_shares?

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :stock,
    foreign_key: :stock_id,
    class_name: :Stock

  
  # check user account_balance and check order price
  def enough_money?
    order_price = price * num_shares;
    if order_type == "BUY"
      if user.account_balance < order_price
        errors[:base] << "Not enough money to buy"
      else 
        return true
      end
    else 
      return true
    end 
  end

  def enough_shares?
    if order_type == "SELL"
      if user.stock_owned_shares(stock_id) < num_shares
        errors[:base] << "Not enough shares to sell"
      else 
        return true
      end
    else 
      return true
    end
  end
   
  def non_zero_shares
    return if num_shares > 0
    errors[:base] << "Must purchase more than 0 shares"
  end
end
