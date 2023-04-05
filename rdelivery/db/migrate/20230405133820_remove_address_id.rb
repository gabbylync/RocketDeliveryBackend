class RemoveAddressId < ActiveRecord::Migration[7.0]
  def change
    remove_column :restaurants, :address_id
  end
end
