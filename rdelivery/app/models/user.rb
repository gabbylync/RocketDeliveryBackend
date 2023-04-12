class User < ApplicationRecord
  has_one :customer
  has_one :employee
  has_one :courier
  has_many :restaurants
  validates :name, :email, :password, presence: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
