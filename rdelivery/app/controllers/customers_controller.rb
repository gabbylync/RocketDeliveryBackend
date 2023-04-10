class CustomersController < ApplicationController
  before_action :current_customer, only: [:show, :edit, :update, :destroy]

  def index
    @customers = Customer.all
  end

  def new
    @customer = Customer.new
  end

  def create
    customer = Customer.create(customer_params)

    redirect_to customer_path(customer)
  end

  def show
  end

  def edit
  end

  def update
    @customer.update(customer_params)

    redirect_to customer_path(@customer)
  end

  def destroy
    @customer.destroy

    redirect_to customers_path
  end
  private

  def customer_params
    params.require(:customer).permit(:phone, :email, :active, :user_id, :address_id)
  end

  def current_customer
    @customer = Customer.find(params[:id])
  end
end
