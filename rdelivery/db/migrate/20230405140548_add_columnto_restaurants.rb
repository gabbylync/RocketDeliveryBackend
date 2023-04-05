class AddColumntoRestaurants < ActiveRecord::Migration[7.0]
  def change
    add_reference :restaurants, :user, foreign_key: true, null: false 
    add_reference :restaurants, :address, foreign_key: true, null: false, unique: true
  end
end
