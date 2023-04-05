class AddColumnOrderStat < ActiveRecord::Migration[7.0]
  def change
    add_reference :orders, :order_status, foreign_key: true, null: false
  end
end
