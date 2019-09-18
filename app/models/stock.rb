# == Schema Information
#
# Table name: stocks
#
#  id         :bigint           not null, primary key
#  ticker     :string           not null
#  price      :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Stock < ApplicationRecord
  validates :ticker, presence: true, uniqueness: true;
  validates :name, presence: true 

  has_many :watchlist_items,
    foreign_key: :Stock_id,
    class_name: :WatchlistItem

 
  
  
end
