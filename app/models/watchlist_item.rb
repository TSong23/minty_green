# == Schema Information
#
# Table name: watchlist_items
#
#  id           :bigint           not null, primary key
#  watchlist_id :integer          not null
#  stock_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class WatchlistItem < ApplicationRecord
  validates :watchlist_id, :stock_id, presence: true

  belongs_to :watchlist, 
    foreign_key: :watchlist_id,
    class_name: :Watchlist

  belongs_to :stock,
    foreign_key: :stock_id,
    class_name: :Stock  
  
  
end
