class Restaurant < ApplicationRecord
    belongs_to :user
    belongs_to :address

    has_many :products
    has_many :orders
end
