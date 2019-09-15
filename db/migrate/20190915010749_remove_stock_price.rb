class RemoveStockPrice < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :price
  end
end
