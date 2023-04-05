class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :restaurant, foreign_key: true, null: false
      t.integer :customer, foreign_key: true, null: false
      t.integer :order_status, foreign_key: true, null: false
      t.integer :restaurant_rating, limit: 1, inclusion: 1..5

      t.timestamps
    end
  end
end
