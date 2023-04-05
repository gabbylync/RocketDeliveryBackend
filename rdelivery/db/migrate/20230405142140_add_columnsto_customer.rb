class AddColumnstoCustomer < ActiveRecord::Migration[7.0]
  def change
    add_reference :customers, :user, foreign_key: true, null: false, unique: true
    add_reference :customers, :address, foreign_key: true, null: false
  end
end
