class RemoveColumnOrderStats < ActiveRecord::Migration[7.0]
  def change
    remove_column :order_statuses, :name
  end
end
