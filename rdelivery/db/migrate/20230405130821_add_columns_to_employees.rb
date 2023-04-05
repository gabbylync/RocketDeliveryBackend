class AddColumnsToEmployees < ActiveRecord::Migration[7.0]
  def change
    add_reference :employees, :user, foreign_key: true, null: false, unique: true, first: true 
    add_reference :employees, :address, foreign_key: true, null: false, first: true
  end
end
