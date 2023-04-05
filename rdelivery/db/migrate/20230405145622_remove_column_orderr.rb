class RemoveColumnOrderr < ActiveRecord::Migration[7.0]
  def change
    remove_column :orders, :customer
    remove_column :orders, :restaurant
  end
end
