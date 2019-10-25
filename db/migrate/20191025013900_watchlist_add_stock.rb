class WatchlistAddStock < ActiveRecord::Migration[5.2]
  def change
    add_column :watchlists, :stock_id, :integer, null: false
    add_index :watchlists, :stock_id
  end
end
