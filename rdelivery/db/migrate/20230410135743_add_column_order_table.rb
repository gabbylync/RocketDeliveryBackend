class AddColumnOrderTable < ActiveRecord::Migration[7.0]
  def change
    add_reference :orders, :courier, foreign_key: true 
  end
end
