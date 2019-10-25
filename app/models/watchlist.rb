# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  stock_id   :integer          not null
#

class Watchlist < ApplicationRecord
  validates :user_id, presence: true
  validates :stock_id, presence: true
  validates_uniqueness_of :stock_id, scope: :user_id, :message=>"Stock is on watchlist"

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :stock,
    foreign_key: :stock_id,
    class_name: :Stock
end
