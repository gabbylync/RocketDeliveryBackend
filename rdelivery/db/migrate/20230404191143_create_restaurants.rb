class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.integer :user_id, null: false
      t.integer :address_id, null: false, unique: true
      t.string :phone, null: false
      t.string :email
      t.string :name, null: false
      t.integer :price_range, null: false, default: 1, limit: 1, inclusion: 1..3
      t.boolean :active, null: false, default: true 

      t.timestamps
    end
  end
end
