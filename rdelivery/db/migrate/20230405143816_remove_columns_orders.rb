class RemoveColumnsOrders < ActiveRecord::Migration[7.0]
  def change
    remove_column :orders, :customer_id
    remove_column :orders, :restaurant_id
    remove_column :orders, :order_status_id
  end
end
