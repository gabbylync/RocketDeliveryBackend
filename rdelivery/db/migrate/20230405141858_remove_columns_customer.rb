class RemoveColumnsCustomer < ActiveRecord::Migration[7.0]
  def change
    remove_column :customers, :user_id
    remove_column :customers, :address_id
  end
end
