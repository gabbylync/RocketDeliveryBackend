class RemoveColumnOrderstatussss < ActiveRecord::Migration[7.0]
  def change
    remove_column :order_statuses, :name_id
  end
end
