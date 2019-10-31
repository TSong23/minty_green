# == Schema Information
#
# Table name: stocks
#
#  id         :bigint           not null, primary key
#  ticker     :string           not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Stock < ApplicationRecord
  validates :ticker, presence: true, uniqueness: true;
  validates :name, presence: true 

  has_many :watchlists,
    foreign_key: :stock_id,
    class_name: :Watchlist

  has_many :transactions,
    foreign_key: :stock_id,
    class_name: :Transaction


end
