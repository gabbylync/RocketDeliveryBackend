class OrderStatusesController < ApplicationController
  before_action :current_order_status, only: [:show, :edit, :update, :destroy]
  def index
    @order_statuses = OrderStatus.all
  end

  def new
    @order_status = OrderStatus.new
  end

  def create
    order_status = OrderStatus.create(order_status_params)

    redirect_to product_path(order_status)
  end

  def show
  end

  def edit
  end

  def update
    @order_status.update(order_status_params)

    redirect_to order_status_path(@order_status)
  end

  def destroy
    @order_status.destroy

    redirect_to order_statuses_path
  end
  private

  def order_status_params
    params.require(:order_status).permit(:name)
  end
end
