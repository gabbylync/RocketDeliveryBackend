class Order < ApplicationRecord
    belongs_to :restaurant
    belongs_to :customer
    belongs_to :order_status
    belongs_to :courier, optional: true

    has_many :product_orders

    validates :restaurant_id, :customer_id, :order_status_id, presence: true
    validates :restaurant_rating, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }, allow_nil: true
  
end
