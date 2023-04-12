class CreateCouriers < ActiveRecord::Migration[7.0]
  def change
    create_table :couriers do |t|
      t.string :phone, null: false
      t.string :email
      t.boolean :active, null: false, default: true 

      t.timestamps
    end
  end
end
