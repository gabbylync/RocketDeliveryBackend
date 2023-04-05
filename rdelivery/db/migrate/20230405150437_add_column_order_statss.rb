class AddColumnOrderStatss < ActiveRecord::Migration[7.0]
  def change
    add_reference :order_statuses, :name, null: false
  end
end
