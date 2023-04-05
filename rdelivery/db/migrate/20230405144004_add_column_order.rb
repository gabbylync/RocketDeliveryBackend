class AddColumnOrder < ActiveRecord::Migration[7.0]
  def change
    add_reference :orders, :customer, foreign_key: true, null: false
    add_reference :orders, :restaurant, foreign_key: true, null: false
  end
end
