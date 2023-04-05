class AddcolumnproductOrders < ActiveRecord::Migration[7.0]
  def change
    add_reference :product_orders, :product, null: false, foreign_key: true 
    add_reference :product_orders, :order, null: false, foreign_key: true 
  end
end
