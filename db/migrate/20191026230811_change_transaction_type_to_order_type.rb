class ChangeTransactionTypeToOrderType < ActiveRecord::Migration[5.2]
  def change
    rename_column :transactions, :type, :order_type
  end
end
