# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :watchlists,
    foreign_key: :user_id,
    class_name: :Watchlist

  has_many :deposits,
    foreign_key: :user_id,
    class_name: :Deposit

  has_many :transactions,
    foreign_key: :user_id,
    class_name: :Transaction

  has_many :watching_stocks,
    through: :watchlists,
    source: :stock

  #User Auth
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  
  #User Account Balance
  #every deposit adds to account balance, every transaction takes away

  def account_balance
    balance = 0
    deposits.each {|deposit| balance += deposit.amount}

    transactions.each do |transaction|
      amount = transaction.price * transaction.num_shares
      transaction.order_type == 'BUY' ? balance -= amount : balance += amount
    end
    return balance.round(2)
  end




  #User Stock
  def all_owned_stock_hash
    allStocks = Hash.new(0)

    transactions.each do |action|
      if action.order_type == "BUY"
        allStocks[action.stock_id] += action.num_shares
      else
        allStocks[action.stock_id] -= action.num_shares
      end
    end
    return allStocks.select {|stockID, numShares| numShares > 0}
  end


  def stock_owned_shares(stockID)
    shares = 0
    shares = all_owned_stock_hash[stockID] if all_owned_stock_hash[stockID]
    return shares
  end

end
