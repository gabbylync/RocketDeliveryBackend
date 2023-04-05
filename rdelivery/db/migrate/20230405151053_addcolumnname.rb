class Addcolumnname < ActiveRecord::Migration[7.0]
  def change
    add_column :order_statuses, :name, :string, null: false
  end
end
