class Customer < ApplicationRecord
    belongs_to :address
    belongs_to :user
    has_many :orders

    validates :user_id, :address_id, :phone, :active, presence: true
    validates_uniqueness_of :user_id

end
