class CreateProductOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :product_orders do |t|
      t.integer :product_quantity, null: false, default: 0, check: "cost > 0"
      t.integer :product_unit_cost, null: false, default: 0, check: "cost >= 0"

      t.timestamps
    end
  end
end
