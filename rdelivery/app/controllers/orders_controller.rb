class OrdersController < ApplicationController
  before_action :current_order, only: [:show, :edit, :update, :destroy]
  
  def index
    @orders = Order.all
  end

  def new
    @order = Order.new
  end

  def create
    order = Order.create(order_params)

    redirect_to order_path(order)
  end

  def show
  end

  def edit
  end

  def update
    @order.update(order_params)

    redirect_to order_path(@order)
  end

  def destroy
    @order.destroy

    redirect_to orders_path
  end
  private

  def order_params
    params.require(:order).permit(:restaurant_rating, :customer_id, :restaurant_id, :order_status_id, :courier_id)
  end

  def current_order
    @order = Order.find(params[:id])
  end
end
