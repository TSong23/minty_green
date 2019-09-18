# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Watchlist < ApplicationRecord
  validates :user_id, presence: true

  has_many :watchlist_items,
    foreign_key: :watchlist_id,
    class_name: :WatchlistItem
  
  has_many :watched_stocks,
    through: :watchlist_items,
    source: :stock

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
