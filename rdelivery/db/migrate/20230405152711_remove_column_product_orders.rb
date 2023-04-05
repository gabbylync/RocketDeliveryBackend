class RemoveColumnProductOrders < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :restaurant_id
  end
end
