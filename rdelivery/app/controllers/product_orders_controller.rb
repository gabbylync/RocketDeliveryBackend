class ProductOrdersController < ApplicationController
  before_action :current_product_order, only: [:show, :edit, :update, :destroy]
  def index
    @product_orders = ProductOrder.all
  end

  def new
    @product_order = ProductOrder.new
  end

  def create
    product_order = ProductOrder.create(product_order_params)

    redirect_to product_order_path(product_order)
  end

  def show
  end

  def edit
  end

  def update
    @product_order.update(product_order_params)

    redirect_to product_order_path(@product_order)
  end

  def destroy
    @product_order.destroy

    redirect_to product_orders_path
  end
  private

  def product_order_params
    params.require(:product_order).permit(:product_quantity, :product_unit_cost, :product_id, :order_id)
  end

  def current_product_order
    @product_order = ProductOrder.find(params[:id])
  end
end
