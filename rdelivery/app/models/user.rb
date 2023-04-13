class User < ApplicationRecord
  has_one :customer
  has_one :employee
  has_one :courier
  has_many :restaurants
  validates :email, :password, :name, presence: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

def active_for_authentication?
  super && is_employee?
end
      
def is_employee?
  Employee.find_by(id: self.id)
end
            
end
