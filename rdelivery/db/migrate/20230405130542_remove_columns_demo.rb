class RemoveColumnsDemo < ActiveRecord::Migration[7.0]
  def change
    remove_column :employees, :user_id
    remove_column :employees, :address_id
    remove_column :restaurants, :user_id
  end
end
