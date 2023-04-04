class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.integer :restaurant_id, null: false
      t.string :name, null: false
      t.string :description
      t.integer :cost, null: false, default: 0, check: "cost >= 0"

      t.timestamps
    end
  end
end
