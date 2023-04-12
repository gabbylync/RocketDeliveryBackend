class AddColumnCouriers < ActiveRecord::Migration[7.0]
  def change
    add_reference :couriers, :user, null: false, unique: true, foreign_key: true 
    add_reference :couriers, :address, null: false, foreign_key: true 
    add_reference :couriers, :courier_status, null: false, default: 1, foreign_key: true 
  end
end
